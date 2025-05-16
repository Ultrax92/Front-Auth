import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      const auth = JSON.parse(localStorage.getItem("auth"));

      if (auth) {
        await fetch("https://offers-api.digistos.com/api/auth/logout", {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          credentials: "include",
        });
      }

      localStorage.removeItem("auth");
      navigate("/connexion");
    };

    handleLogout();
  }, [navigate]);

  return null; // Pas besoin d'afficher quoi que ce soit
};

export default Logout;
