import { makeStyles } from '@material-ui/styles';

export default makeStyles({
    chatIcon: {
       borderRadius: "50%",
       display: "inline-flex",
       padding: "10px",
       backgroundColor: data => `#${data.color}`,
       border: "1px solid rgba(81,92,93,0.1)",
       position: "absolute",
       bottom: 0,
       right: 0
    },
    chatIconImage: {
      height: "30px"
    }
})
