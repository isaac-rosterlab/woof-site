// Native invitations use the same marketing domain, with an explicit app handoff.
// No accounts, dog profiles, photos or app functionality run on this website.
const invitation = new URLSearchParams(window.location.search).get('invite');
if (invitation && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(invitation)) {
  const link = document.getElementById('open-invitation');
  link.href = `woofclub://?invite=${encodeURIComponent(invitation)}`;
  link.hidden = false;
  document.body.classList.add('has-invite');
}
// Store controls deliberately remain disabled until actual listings are published.
