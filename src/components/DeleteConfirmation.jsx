import { useEffect } from 'react';

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(() => {
    const timer = setTimeout(() => {
    onConfirm();
  }, 3000);

  return () => {
    clearTimeout(timer);
  }
}, [onConfirm]); //This is a side effect because it's not directly related to outputting the jsx code. The jsx code will always be rendered and if we use condition ({open ? showcontent : null}), it's will cause a problem too. Because no matter the selection user chose (No or Yes), the dialog will close by itself after 3 seconds.

//Objects and functions are not treated as equal. So there may be a problem with objects and functions as dependencies (It will cause an infinite loop). Especially if there is a state update function in the function (set as dependency), because it will cause the App component to re-executed again and produce a new function, which we can't compare with the previous one (it always will be different).
  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
    </div>
  );
}
