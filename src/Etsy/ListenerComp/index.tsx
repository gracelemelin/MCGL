import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function useNavigateBack() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleBackNavigation = () => {
      navigate(-1); // Navigate back by one page
    };

    // Listen for mouse clicks on the browser's back button
    window.addEventListener('popstate', handleBackNavigation);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener('popstate', handleBackNavigation);
    };
  }, [navigate]);

  return null; // This hook doesn't render anything
}

export default useNavigateBack;