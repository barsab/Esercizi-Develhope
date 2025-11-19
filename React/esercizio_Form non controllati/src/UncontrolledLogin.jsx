function UncontrolledLogin() {
  function handleLogin(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    console.log({email, password});
  }

  return (
   <form onSubmit={handleLogin} className="wrapper">
    <input type="email" name="email" placeholder="Email" />
    <input type="password" name="password" placeholder="Password" />
    <button type="submit">Login</button>
   </form>
  )
}

export default UncontrolledLogin;