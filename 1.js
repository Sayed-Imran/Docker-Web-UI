Document.onload = active_cont();

function active_cont() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../cgi-bin/c.py?x=docker+ps", true);
    xhr.send();
    xhr.onload = function () {
        var output = xhr.responseText;

        document.getElementById("ac-data").innerHTML = "<pre>"+output+"</pre>";
    }



    var i = new XMLHttpRequest();
    i.open("GET", "../cgi-bin/c.py?x=docker+images", true);
    i.send();
    i.onload = function () {
        var o = i.responseText;

        document.getElementById("ai-data").innerHTML = "<pre>"+o+"</pre>";
    }


    var st = new XMLHttpRequest();
    st.open("GET", "../cgi-bin/c.py?x=docker+ps+--filter+'status=exited'", true);
    st.send();
    st.onload = function () {
        var ot = st.responseText;

        document.getElementById("ic-data").innerHTML = "<pre>"+ot+"</pre>";
    }
    get_img_dp();
    get_cnt_start_dp();
    get_cnt_stp_dp();
    get_cnt_rmv_dp();
}

function pullimg() {
    pi = document.getElementById("image");
    var ig = new XMLHttpRequest();
    ig.open("GET", "../cgi-bin/d.py?x=docker+pull+" + pi.value, true);
    ig.send();
    ig.onload = function () {
        var io = ig.responseText;

        alert(io);
    }
}

function delimg() {
    dm = document.getElementById("dimage")
    var d = new XMLHttpRequest();
    d.open("GET", "../cgi-bin/i.py?x=" + dm.value, true);
    d.send();
    d.onload = function () {
        var op = d.responseText;

        alert(op);
    }
}
function get_img_dp()
{
    var i = new XMLHttpRequest();
    i.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200)
        {
            var imgdata=JSON.parse(this.responseText);
            var imgdp = document.getElementById("img-dp");
            imgdp.innerHTML="";
            imgdata.forEach(element=>
                {
                    imgdp.innerHTML+='<li><button type="button" class="dropdown-item" onclick="ctn_st(this)">'+element+'</button></li>';
                });
        }
    }
    i.open("GET", "../cgi-bin/img.py", true);
    i.send();
}
function get_cnt_stp_dp()
{
    var i = new XMLHttpRequest();
    i.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200)
        {
            var cnt_stp_data=JSON.parse(this.responseText);
            var cnt_stp = document.getElementById("ctn-stp-dn");
            cnt_stp.innerHTML="";
            cnt_stp_data.forEach(element=>
                {
                    cnt_stp.innerHTML+='<li><button type="button" class="dropdown-item" onclick="ctn_stop(this)">'+element+'</button></li>';
                });
        }
    }
    i.open("GET", "../cgi-bin/stlist.py", true);
    i.send();
}
function get_cnt_rmv_dp()
{
    var i = new XMLHttpRequest();
    i.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200)
        {
            var cnt_rmv_data=JSON.parse(this.responseText);
            var cnt_rmv = document.getElementById("ctn-rmv-dn");
            cnt_rmv.innerHTML="";
            cnt_rmv_data.forEach(element=>
                {
                    cnt_rmv.innerHTML+='<li><button type="button" class="dropdown-item" onclick="ctn_rmv(this)">'+element+'</button></li>';
                });
        }
    }
    i.open("GET", "../cgi-bin/rmlist.py", true);
    i.send();
}
function get_cnt_start_dp() {
    var i = new XMLHttpRequest();
    i.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var cnt_rmv_data = JSON.parse(this.responseText);
            var cnt_rmv = document.getElementById("ctn-start-dn");
            cnt_rmv.innerHTML = "";
            cnt_rmv_data.forEach(element => {
                cnt_rmv.innerHTML += '<li><button type="button" class="dropdown-item" onclick="ctn_start(this)">' + element + '</button></li>';
            });
        }
    }
    i.open("GET", "../cgi-bin/rmlist.py", true);
    i.send();
}
function ctn_st(img_val)
{
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function()
    {
        if(this.readyState==4 && this.status==200)
        {
            alert(this.responseText);
	    active_cont();
        o}
    }
    xmlhttp.open("GET", "../cgi-bin/cgl.py?name="+document.getElementById("name").value+"&image="+img_val.innerHTML, true);
    xmlhttp.send();
}
function ctn_stop(cnt_nm)
{
    const xmlhttp = new XMLHttpRequest();
    alert(document.getElementById("name").value+" "+cnt_nm.innerHTML);
    xmlhttp.onreadystatechange = function()
    {
        if(this.readyState==4 && this.status==200)
        {
            alert(this.responseText);
	    active_cont();
        }
    }
    xmlhttp.open("GET", "../cgi-bin/st.py?x="+cnt_nm.innerHTML, true);
    xmlhttp.send();
}
function stp_all()
{
    if(confirm('Are you sure you want to stop all containers?'))
    {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function()
        {
            if(this.readyState==4 && this.status==200)
            {
                alert(this.responseText);
		active_cont();
            }
        }
        xmlhttp.open("GET", "../cgi-bin/allstop.py", true);
        xmlhttp.send();
    }
}
function ctn_rmv(cnt_nm)
{
    const xmlhttp = new XMLHttpRequest();
    alert(document.getElementById("name").value+" "+cnt_nm.innerHTML);
    xmlhttp.onreadystatechange = function()
    {
        if(this.readyState==4 && this.status==200)
        {
            alert(this.responseText);
	    active_cont();
        }
    }
    xmlhttp.open("GET", "../cgi-bin/rm.py?x="+cnt_nm.innerHTML, true);
    xmlhttp.send();
}
function ctn_start(cnt_nm) {
    const xmlhttp = new XMLHttpRequest();
    alert(document.getElementById("name").value + " " + cnt_nm.innerHTML);
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);
            active_cont();
        }
    }
    xmlhttp.open("GET", "../cgi-bin/start.py?x=" + cnt_nm.innerHTML, true);
    xmlhttp.send();
}
function rmv_all()
{
    if(confirm('Are you sure you want to remove all inactive containers?'))
    {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function()
        {
            if(this.readyState==4 && this.status==200)
            {
                alert(this.responseText);
		active_cont();
            }
        }
        xmlhttp.open("GET", "../cgi-bin/allrm.py", true);
        xmlhttp.send();
    }
}
function start_all() {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                alert(this.responseText);
                active_cont();
            }
        }
        xmlhttp.open("GET", "../cgi-bin/allstart.py", true);
        xmlhttp.send();
}
function img_pull()
{
    var img_pull_name = document.getElementById('ip-img-pull-txtfld').value;
    if(img_pull_name!=null)
    {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function()
        {
            if(this.readyState==4 && this.status==200)
            {
                alert(this.responseText);
            }
        }
        xmlhttp.open("GET", "../cgi-bin/d.py?x=docker+pull+"+img_pull_name, false);
        xmlhttp.send();
	active_cont();
    }
    else{
        alert("Please provide name of the image to be pulled!");
    }
}
function img_rmv() {
        img_del_name = document.getElementById('ip-img-del-txtfld').value;
        if (img_del_name != null) {
            const xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    alert(this.responseText);
                }
            }
            xmlhttp.open("GET", "../cgi-bin/t.py?x=docker+rmi+" + img_del_name, false);
            xmlhttp.send();
	    active_cont();
        } else {
            alert("Please provide name of the image to be deleted!");
        }
    }
