import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faSpinner,
  faPlus,
  faUserCircle,
  faPhoneAlt,
  faEnvelope,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  library.add(
    faTrash,
    faSignOutAlt,
    faEdit,
    faSpinner,
    faPlus,
    faUserCircle,
    faPhoneAlt,
    faEnvelope,
    faMapMarkedAlt
  );
};

export default Icons;
