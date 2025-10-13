import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 

const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();

    // Se não houver usuário logado...
    if (!user) {
        // ...redireciona para a página de login.
        // O 'replace' evitando que o usuário volte para a página protegida usando o botão "voltar" do navegador.
        return <Navigate to="/login" replace />;
    }

    // Se houver um usuário, renderiza o componente filho (página proteger).
    return children;
};

export default ProtectedRoute;