import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();

  useEffect(() => navigate("/"), []);

  return <h1>This page doesn't exist, redirecting you to the main page</h1>;
}
