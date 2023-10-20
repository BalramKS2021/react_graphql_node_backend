import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    CircularProgress,
    Typography,
  } from "@mui/material";
  
  interface Props {
    open: boolean;
    onClose: () => void;
    onSubmit: () => void;
    header: string;
    message: string;
    loading: boolean;
  }
  const PermissionAlert = ({
    open,
    onClose,
    onSubmit,
    header,
    message,
    loading,
  }: Props) => {
    return (
      <Dialog open={open} maxWidth="xs" fullWidth={true}>
        <DialogTitle>{header}</DialogTitle>
        <DialogContent>
          <Typography>{message}</Typography>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={onSubmit}
            type="submit"
            disabled={loading ? true : false}
          >
            Yes
            {loading && <CircularProgress color="secondary" size={15} />}
          </Button>
          <Button onClick={onClose} variant="contained" color="info">
            No
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  
  export default PermissionAlert;
  