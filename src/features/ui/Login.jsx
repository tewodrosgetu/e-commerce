import Button from "./Button";

function Login() {
  return (
    <div>
      <form>
        <h1>Login</h1>
        <input type="email" placeholder="Email Addres" />
        <input type="text" placeholder="password" />
        <Button>continue</Button>
      </form>
    </div>
  );
}

export default Login;
