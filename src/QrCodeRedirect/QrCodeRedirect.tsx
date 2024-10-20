export const QrCodeRedirect = () => {
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
        window.location.replace('https://apps.apple.com/pt/app/meltpot/id6651821277')
    } else {
        window.location.replace('https://play.google.com/store/apps/details?id=pt.meltpot.meltpotapp')
    }

    return (
        <div>
            <p>Redirecting...</p>
        </div>
    );
};