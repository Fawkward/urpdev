export let socialClubId: string;

mp.events.addProc('RPC::S2C:Getting:SocialClub', (clubId: string) => {
  socialClubId = clubId;
});
