import React from 'react';

import { auth } from '../firebase';

const SignOutButton = () =>
/*    <button
        type="button"
        onClick={auth.doSignOut}
    >
        Sign Out
  </button>
*/
    <a
//        type="a"
        onClick={auth.doSignOut}
    >
        <p>Sign Out</p>
  </a>



//     <div
//         //type="button"
//         onClick={auth.doSignOut}
//     >
//         Sign Out
//   </div>

export default SignOutButton;
