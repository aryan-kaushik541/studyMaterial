function Capture() {
    var url = "http://127.0.0.1:11100/capture";
    var PIDOPTS = '<PidOptions ver=\"1.0\">' +
                  '<Opts fCount=\"1\" fType=\"0\" iCount=\"\" iType=\"\" pCount=\"\" pType=\"\" format=\"0\" pidVer=\"2.0\" timeout=\"10000\" otp=\"\" wadh=\"\" posh=\"\"/>' +
                  '</PidOptions>';

    var xhr;
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) { // If Internet Explorer, return version number
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    } else {
        xhr = new XMLHttpRequest();
    }

    xhr.open('POST', url, true);
    xhr.setRequestHeader("Content-Type", "text/xml");
    xhr.setRequestHeader("Accept", "text/xml");

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var status = xhr.status;
            if (status == 200) {
                var response = xhr.responseText;

                // Check if biometric capture was successful
                var test1 = xhr.responseText;
                var test2 = test1.search("errCode");
                var test6 = getPosition(test1, '"', 2);
                var test4 = test2 + 9;
                var test5 = test1.slice(test4, test6);

                if (test5 > 0) {
                    // If an error occurred, show the error response
                    alert(xhr.responseText);
                } else {
                    // If capture was successful, redirect to the dashboard
                    alert("Captured Successfully");
                    window.location.href = "dashboard.html"; // Redirect to the dashboard
                }

            } else {
                console.error(xhr.response);
                alert("An error occurred during biometric capture");
            }
        }
    };

    xhr.send(PIDOPTS); // Send the biometric data (PIDOPTS)
}

function getPosition(string, subString, index) {
    return string.split(subString, index).join(subString).length;
}
