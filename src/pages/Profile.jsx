import React, { useEffect, useState } from "react";
import {
  Mail,
  HelpCircle,
  PlusCircle,
  Edit3,
  Save,
  X,
  Image,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const DEFAULT_AVATAR =
  "https://www.svgrepo.com/show/452030/avatar-default.svg";

const Profile = () => {
  const navigate = useNavigate();

  /* 🔹 Load user from localStorage */
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("profileUser");
    return savedUser
      ? JSON.parse(savedUser)
      : {
          name: "",
          email: "",
          avatar: DEFAULT_AVATAR,
        };
  });

  const [formData, setFormData] = useState(user);
  const [isEditing, setIsEditing] = useState(false);
  const [isAddAccount, setIsAddAccount] = useState(false);

  /* 🔹 Keep formData in sync */
  useEffect(() => {
    setFormData(user);
  }, [user]);

  /* 🔹 Handle Input */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* 🔹 Avatar File Upload */
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageURL = URL.createObjectURL(file);
    setFormData({ ...formData, avatar: imageURL });
  };

  /* 🔹 Save Profile (Persist) */
  const saveProfile = () => {
    const updatedUser = {
      ...formData,
      avatar: formData.avatar || DEFAULT_AVATAR,
    };

    setUser(updatedUser);
    localStorage.setItem("profileUser", JSON.stringify(updatedUser));

    setIsEditing(false);
    setIsAddAccount(false);
  };

  return (
    <div className="min-h-screen bg-darkbg text-white px-4 md:px-10 py-10 relative">
      
      {/* Login Button */}
      <button
        onClick={() => navigate("/login")}
        className="bg-primary text-black px-4 py-2 rounded-xl absolute right-10 top-6"
      >
        Log in
      </button>

      {/* Profile Card */}
      <div className="max-w-3xl mx-auto bg-zinc-900/80 rounded-2xl p-8 shadow-lg mt-12">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={user.avatar}
            alt="profile"
            className="w-32 h-32 rounded-full border-4 border-primary object-cover"
          />

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold">
              {user.name || "Your Name"}
            </h1>
            <p className="text-neon flex items-center gap-2 justify-center md:justify-start mt-1">
              <Mail size={16} />
              {user.email || "your@email.com"}
            </p>
          </div>

          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 bg-primary text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition"
          >
            <Edit3 size={16} />
            Edit Profile
          </button>
        </div>

        {/* Options */}
        <div className="flex flex-col gap-6 mt-10">
          <div
            onClick={() => navigate("/contact")}
            className="flex items-center gap-4 bg-zinc-800 rounded-xl p-5 hover:bg-zinc-700 cursor-pointer"
          >
            <HelpCircle className="text-neon" size={28} />
            <div>
              <h3 className="font-semibold text-lg">Help & Support</h3>
              <p className="text-sm text-gray-400">
                Contact our support team
              </p>
            </div>
          </div>

          <div
            onClick={() => setIsAddAccount(true)}
            className="flex items-center gap-4 bg-zinc-800 rounded-xl p-5 hover:bg-zinc-700 cursor-pointer"
          >
            <PlusCircle className="text-blue-400" size={28} />
            <div>
              <h3 className="font-semibold text-lg">Add Account</h3>
              <p className="text-sm text-gray-400">
                Update email & avatar
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {(isEditing || isAddAccount) && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-zinc-900 rounded-2xl p-6 w-[90%] max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                {isAddAccount ? "Add Account" : "Edit Profile"}
              </h2>
              <button
                onClick={() => {
                  setIsEditing(false);
                  setIsAddAccount(false);
                }}
              >
                <X />
              </button>
            </div>

            <div className="space-y-4">
              {!isAddAccount && (
                <div>
                  <label className="text-sm text-gray-400">Name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-zinc-800 px-4 py-2 rounded-lg"
                  />
                </div>
              )}

              <div>
                <label className="text-sm text-gray-400">Email</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-zinc-800 px-4 py-2 rounded-lg"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm text-gray-400">
                  <Image size={16} /> Avatar
                </label>
                <div className="flex items-center gap-4 mt-2">
                  <img
                    src={formData.avatar}
                    className="w-16 h-16 rounded-full"
                  />
                  <input type="file" accept="image/*" onChange={handleAvatarChange} />
                </div>
              </div>

              <button
                onClick={saveProfile}
                className="w-full bg-green-500 text-black py-2 rounded-full font-semibold"
              >
                <Save size={16} /> Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="h-50">

      </div>
    </div>
  );
};

export default Profile;
