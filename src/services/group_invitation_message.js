export function adminInvite(groupLink) {
  // const {  groupLink } = props;
  // console.log(groupLink)
  return `
        <div>
          <p>Hello</p>
          <p>You have been invited to join click on the link below to join.</p>
          <p>Click Here:</p> <a> ${groupLink}</a>
   
        </div>
      `;
}