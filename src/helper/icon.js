import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faSpinner,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  library.add(faTrash, faSignOutAlt, faEdit, faSpinner, faPlus);
};

export default Icons;
