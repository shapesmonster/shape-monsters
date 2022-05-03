import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";

export default function MintDialog({
  open,
  onClose,
  amount,
  handleCounterUp,
  handleCounterDown
}) {



return (
	<Dialog open={open} onClose={onClose}>
		<DialogTitle>{"How many?"}</DialogTitle>
		<DialogContent>
		<DialogContentText>
    Amount: {amount}
    <Button onClick={handleCounterUp}
    color="primary" autoFocus>
    +
    </Button>
    <Button onClick={handleCounterDown}
    color="primary" autoFocus>
    -
    </Button>
		</DialogContentText>
		</DialogContent>
		<DialogActions>
    <Button onClick={onClose}
    color="primary" autoFocus>
    MINT
    </Button>
		</DialogActions>
	</Dialog>
);
}

// <Button onClick={onClose}
// color="primary" autoFocus>
// Close
// </Button>
