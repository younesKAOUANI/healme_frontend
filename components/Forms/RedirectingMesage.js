import { useEffect } from 'react';
import { useRouter } from 'next/router';

const RedirectingMessage = ({ role }) => { // Destructure role from props
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Directly use the role for redirection logic
      if (role === 'admin') {
        router.push('/admin');
      } else if (role === 'user') {
        router.push('/profile');

      } else {
        router.push('/login');
      }
    }, 3000); 

    return () => clearTimeout(timer);
  }, [router, role]);

  return (
    <div>Redirecting...</div> 
  );
};

export default RedirectingMessage;