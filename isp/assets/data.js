// ==========================================
// Translation Data
// ==========================================
const i18n = {
    en: {
        dir: 'ltr',
        flag: 'https://flagcdn.com/w40/gb.png',
        font: "sans-serif",
        appTitle: 'ISP Tester',
        ip: 'IP:',
        location: 'Location:',
        loading: 'Loading...',
        activeServers: 'Active Servers',
        history: 'History',
        share: 'Share',
        searchPlaceholder: 'Search server...',
        checkServers: 'Check Servers',
        checking: 'Checking...',
        shareResults: 'ISP Test Results',
        download: 'Download',
        shareBtn: 'Share',
        back: 'Back',
        copied: 'Copied!',
        copy: 'Copy',
        serverInfo: 'Server Info',
        deleteServer: 'Delete Server',
        deleteConfirmTitle: 'Confirm Delete',
        deleteConfirmMsg: 'Are you sure you want to delete {name}?',
        cancel: 'Cancel',
        delete: 'Delete',
        save: 'Save',
        addCustomDns: 'Add Custom ISP',
        customName: 'Display Name',
        customUrl: 'ISP Address',
        errorEmpty: 'Name and URL cannot be empty.',
        errorInvalid: 'Invalid ISP URL provided.',
        noServers: 'No servers found.',
        error: 'Error',
        tested: 'Not tested',       
    }
};

// ==========================================
// Initial Array Logic
// ==========================================
const initialServers = Object.keys(serverData).map(name => ({
    id: name.replace(/[^a-zA-Z0-9]/g, ''),
    name: name,
    status: 'neutral',
    ping: null,
    isBest: true,
    ...serverData[name],
}));
