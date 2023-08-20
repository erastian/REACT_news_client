import Button from "../../ui/button/Button";

function UserMenu() {
  return (
      <div className='user-menu'>
        <Button style='primary outline'>login</Button>
        <Button style='primary'>register</Button>
      </div>
  );
}

export default UserMenu;