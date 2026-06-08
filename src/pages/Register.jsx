import React, { useState } from "react";
import { Music, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.password
    ) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    const users =
      JSON.parse(localStorage.getItem("musicflow_users")) || [];

    const existingUser = users.find(
      (u) => u.email === form.email
    );

    if (existingUser) {
      alert("Email already registered");
      setLoading(false);
      return;
    }

    const newUser = {
      name: form.name,
      email: form.email,
      password: form.password,
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);

    localStorage.setItem(
      "musicflow_users",
      JSON.stringify(users)
    );

    setTimeout(() => {
      alert("Account Created Successfully");

      setForm({
        name: "",
        email: "",
        password: "",
      });

      setLoading(false);

      navigate("/login");
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">

        <div className="flex justify-center items-center gap-2 mb-8">
          <Music size={32} className="text-neon" />
          <h1 className="text-3xl font-bold">
            Music<span className="text-neon">Flow</span>
          </h1>
        </div>

        <h2 className="text-2xl font-bold mb-2">
          Create Account
        </h2>

        <p className="text-gray-400 mb-6">
          Join MusicFlow Today
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>
            <label className="text-sm text-gray-400">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter Name"
              className="w-full mt-2 px-4 py-3 rounded-xl bg-zinc-800 outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="w-full mt-2 px-4 py-3 rounded-xl bg-zinc-800 outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">
              Password
            </label>

            <div className="relative">
              <input
                type={
                  showPassword ? "text" : "password"
                }
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Create Password"
                className="w-full mt-2 px-4 py-3 rounded-xl bg-zinc-800 outline-none focus:ring-2 focus:ring-primary pr-12"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          <button
            disabled={loading}
            className="w-full py-3 rounded-xl bg-primary text-black font-bold hover:scale-[1.02] transition"
          >
            {loading
              ? "Creating Account..."
              : "Register"}
          </button>
        </form>

        <p className="text-center text-gray-400 mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-neon cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;