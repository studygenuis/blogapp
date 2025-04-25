"use client"
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const withAuth = (WrappedComponent) => {
  const AuthenticatedComponent = (props) => {
    const router = useRouter();
    const { data: session} = useSession();

    useEffect(() => {
      const checkSession = async () => {
        
        if (!session) {
          router.push("/login");
        }
      };

      checkSession();
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;