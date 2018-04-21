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
        <a>Sign Out</a>
  </a>



//     <div
//         //type="button"
//         onClick={auth.doSignOut}
//     >
//         Sign Out
//   </div>

export default SignOutButton;
