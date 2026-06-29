import React, { useEffect, useState } from "react";
import {
  Mail,
  HelpCircle,
  Edit3,
  Save,
  X,
  Image,
  LogOut,
  User,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const DEFAULT_AVATAR =
  "https://www.svgrepo.com/show/452030/avatar-default.svg";

const Profile = () => {
  const navigate = useNavigate();

  /* 🔥 SAME KEY AS LOGIN SYSTEM */
  const [user, setUser] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    avatar: DEFAULT_AVATAR,
  });

  const [isEditing, setIsEditing] = useState(false);

  /* 🔥 LOAD USER */
  useEffect(() => {
    const storedUser = localStorage.getItem("musicflow_user");

    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      setUser(parsed);

      setFormData({
        name: parsed.name || "",
        email: parsed.email || "",
        avatar: parsed.avatar || DEFAULT_AVATAR,
      });
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageURL = URL.createObjectURL(file);

    setFormData((prev) => ({
      ...prev,
      avatar: imageURL,
    }));
  };

  /* 🔥 SAVE PROFILE */
  const saveProfile = () => {
    const updatedUser = {
      ...user,
      ...formData,
    };

    localStorage.setItem(
      "musicflow_user",
      JSON.stringify(updatedUser)
    );

    setUser(updatedUser);
    setIsEditing(false);
  };

  /* 🔥 LOGOUT */
  const handleLogout = () => {
    localStorage.removeItem("musicflow_user");
    localStorage.removeItem("musicflow_logged_in");

    setUser(null);
    navigate("/");
  };

  /* ❌ NOT LOGGED IN SCREEN */
  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <User size={60} className="text-gray-500 mb-4" />

        <h1 className="text-2xl font-bold mb-2">
          You are not logged in
        </h1>

        <p className="text-gray-400 mb-6">
          Please login to access your profile
        </p>

        <button
          onClick={() => navigate("/login")}
          className="bg-linear-to-r from-primary to-cyan-500 px-6 py-2 rounded-full text-black font-semibold"
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-darkbg text-white px-4 md:px-10 py-10">

      {/* LOGIN / LOGOUT BUTTON */}
      <div className="flex justify-end gap-3">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-500 px-4 py-2 rounded-xl text-black font-semibold"
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>

      {/* PROFILE CARD */}
      <div className="max-w-3xl mx-auto bg-zinc-900/80 rounded-2xl p-8 shadow-lg mt-6">

        <div className="flex flex-col md:flex-row items-center gap-6">

          <img
            src={formData.avatar}
            alt="profile"
            className="w-32 h-32 rounded-full border-4 border-primary object-cover"
          />

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold">
              {formData.name}
            </h1>

            <p className="text-gray-400 flex items-center gap-2 justify-center md:justify-start mt-1">
              <Mail size={16} />
              {formData.email}
            </p>
          </div>

          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 bg-primary text-black px-5 py-2 rounded-full font-semibold"
          >
            <Edit3 size={16} />
            Edit Profile
          </button>

        </div>

        {/* OPTIONS */}
        <div className="flex flex-col gap-6 mt-10">

          <div
            onClick={() => navigate("/contact")}
            className="flex items-center gap-4 bg-zinc-800 rounded-xl p-5 hover:bg-zinc-700 cursor-pointer"
          >
            <HelpCircle className="text-neon" size={28} />
            <div>
              <h3 className="font-semibold text-lg">
                Help & Support
              </h3>
              <p className="text-sm text-gray-400">
                Contact support team
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* MODAL */}
      {isEditing && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

          <div className="bg-zinc-900 rounded-2xl p-6 w-[90%] max-w-md">

            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                Edit Profile
              </h2>

              <button onClick={() => setIsEditing(false)}>
                <X />
              </button>
            </div>

            <div className="space-y-4">

              <div>
                <label className="text-sm text-gray-400">
                  Name
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-zinc-800 px-4 py-2 rounded-lg"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">
                  Email
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-zinc-800 px-4 py-2 rounded-lg"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm text-gray-400">
                  <Image size={16} />
                  Avatar
                </label>

                <div className="flex items-center gap-4 mt-2">
                  <img
                    src={formData.avatar}
                    className="w-16 h-16 rounded-full"
                  />

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                  />
                </div>
              </div>

              <button
                onClick={saveProfile}
                className="w-full bg-primary text-black py-2 rounded-full font-semibold"
              >
                <Save size={16} /> Save Changes
              </button>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Profile;