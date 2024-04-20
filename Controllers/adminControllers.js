const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    
    const adminUsername = "MADHAN";
    const adminPassword = "madhan007";


    if (username !== adminUsername || password !== adminPassword) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { login };
