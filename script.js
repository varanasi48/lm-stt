<button onclick="scanDocument()">Scan Document</button>
<img id="scannedImage" style="display:none;" />

<script>
function scanDocument() {
    Dynamsoft.DWT.Load().then((DWObject) => {
        DWObject.SelectSource(function () {
            DWObject.OpenSource();
            DWObject.AcquireImage({
                IfShowUI: false,
                PixelType: 2,
                Resolution: 300
            }, function () {
                let image = DWObject.GetImageURL(0);
                document.getElementById('scannedImage').src = image;
                document.getElementById('scannedImage').style.display = 'block';
            });
        });
    });
}
</script>
<script src="https://www.dynamsoft.com/library/dwt/dynamsoft.webtwain.min.js"></script>
