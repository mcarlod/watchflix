export async function signup(req,res) {
  try {
    const {email,password,username} = req.body;

    if(!email || !password || !username ){
      return res.status(400).json({success:false,message:"All field are require"})
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email)){
      return res.status(400).json({success:false,message:"Invalid email"})
    }

    if(password.length < 6){
      return res.status(400).json({success:false,message:"Password must be at least 6 characters"})
    }

  } catch (error) {

  }
}

export async function login(req,res) {
  res.send("Login route")
}

export async function logout(req,res) {
  res.send("Logout route")
}