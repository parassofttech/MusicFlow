import React, { useState } from "react";
import { Music, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
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

    if (!form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    const users =
      JSON.parse(localStorage.getItem("musicflow_users")) || [];

    const user = users.find(
      (u) =>
        u.email === form.email &&
        u.password === form.password
    );

    setTimeout(() => {
      if (!user) {
        alert("Invalid Email or Password");
        setLoading(false);
        return;
      }

      localStorage.setItem(
        "musicflow_user",
        JSON.stringify({
          name: user.name,
          email: user.email,
        })
      );

      localStorage.setItem(
        "musicflow_logged_in",
        "true"
      );

      alert("Login Successful");

      setLoading(false);
      navigate("/");
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
          Welcome Back
        </h2>

        <p className="text-gray-400 mb-6">
          Login to your account
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
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
                placeholder="Enter Password"
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
              ? "Signing In..."
              : "Login"}
          </button>
        </form>

        <p className="text-center text-gray-400 mt-6">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-neon cursor-pointer"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;