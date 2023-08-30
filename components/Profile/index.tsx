import React from "react";
import { useSession, signOut } from "next-auth/react";

const UserProfile = () => {
  const { data: session } = useSession();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div className="bg-blue-900 text-white py-2 px-4">
      <div className="container mx-auto flex items-center justify-between">
        {session?.user ? ( // Check if session.user exists
          <>
            <div className="text-lg font-semibold">
              Hello {session.user.email || "User"}
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              onClick={handleSignOut}
            >
              Logout
            </button>
          </>
        ) : (
          // Render something else if session.user is undefined
          <div className="text-lg font-semibold">Not Logged In</div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
