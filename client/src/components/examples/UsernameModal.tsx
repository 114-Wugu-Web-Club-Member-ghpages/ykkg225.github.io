import UsernameModal from "../UsernameModal";

export default function UsernameModalExample() {
  const handleSubmit = (username: string) => {
    console.log("Username submitted:", username);
  };

  return <UsernameModal open={true} onSubmit={handleSubmit} />;
}
