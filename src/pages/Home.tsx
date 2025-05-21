import { useAuth } from "@/shared/hooks/useAuth";

export default function Home() {
  const { user, logout } = useAuth();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Welcome, {user?.name}</h1>
      <button
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        onClick={() => logout()}
      >
        Logout
      </button>
    </div>
  );
}
