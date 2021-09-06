export function adminInvite(props) {
  const { user, accountType, state, groupLink } = props;
  return `
        <div>
          <p>Hello</p>
          <p>You have been invited to join click on the link below to join.</p>
          <p>Click Here: ${groupLink}</p>
   
        </div>
      `;
}