
const getCurrentShop = () =>{
    return JSON.parse(localStorage.getItem("shop"));
}
const shoplogout = () =>{
    localStorage.removeItem("shop");
}


const getCurrentUser = () =>{
    return JSON.parse(localStorage.getItem("user"));
  }


const logout = () => {
    localStorage.removeItem("user");
}

const authService = {
    getCurrentUser,
    logout,
    getCurrentShop,
    shoplogout
};

export default authService;