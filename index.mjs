// Specs for Divernote. Without this extension an issue is asked and answered.
// With it, Tab picks between an issue and a spec: a spec waits for Pi to write
// it and for your approval, then ends in a pull request.
//
// Install with: divernote install git:github.com/kyleboas/divernote-spec

export default divernote => divernote.addIssueKind('spec');
