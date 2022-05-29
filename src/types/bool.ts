let isActive: boolean;

isActive = false;

function mapStateUser(status: boolean) {
  if (status) {
    return "User is active";
  } else {
    return "User isn't active";
  }
}
