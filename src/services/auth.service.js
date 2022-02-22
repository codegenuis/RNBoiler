class AuthService {
    logout() {
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
  }
  
  export default new AuthService();
  