import { Input } from "./ui/input";
import { PrimaryButton } from "./PrimaryButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas/LoginSchema";
import { useAuth } from "@/shared/hooks/useAuth";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
  const { login } = useAuth(); // pega a função de login do contexto
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(LoginSchema),
  });

  function onSubmit(data: LoginSchema) {
    const { email, password } = data;
    login({ email, password });
    navigate("/home"); // redireciona após login
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-6">
      <div className="space-y-2">
        <Input type="email" placeholder="Email" {...register("email")} />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}

        <Input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      <PrimaryButton type="submit">Enter</PrimaryButton>
    </form>
  );
}
