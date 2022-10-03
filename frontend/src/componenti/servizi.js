



const getCurrentUser = () =>{
    return JSON.parse(localStorage.getItem("user"));
  }


const logout = () => {
    localStorage.removeItem("user");
}

const authService = {
    getCurrentUser,
    logout
};

export default authService;