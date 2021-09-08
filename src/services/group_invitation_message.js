export function adminInvite(groupLink) {
  // const {  groupLink } = props;
  // console.log(groupLink)
  return `
        <div>
          <p>Hello</p>
          <p>You have been invited to join click on the link below to join.</p>
          <p>Click Here: <a href="${groupLink}"
       target="_blank"
          > click</a>
          </p>
   
        </div>
      `;
}