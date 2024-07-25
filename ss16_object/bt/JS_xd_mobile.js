function MobileMachine(battery, texting, inbox, sentbox) {

    //các đặc điểm theo đề bài yêu cầu
    this.battery = battery;
    this.texting = "";
    this.inbox = inbox=[];
    this.sentbox = sentbox=[];

    //các đặc điểm phục vụ cho chức năng
    this.statusM = machineStatus;
    this.message = message = inbox[i];

    //các chức năng theo đề bài yêu cầu

    //check trạng thái đt
    this.checkActivityStatus = function () {
        if (statusM !== -1 || battery > 0) {
            return true;
        } else {
            return false;
        }
    }

    //bật hoặc tắt đt
    this.setStatus = function (boolean) {
        if (!confirm("Turn mobile on?")) {
            return statusM = -1;
        } else {
            return statusM = true;
        }
    }

    //sạc đt
    this.chargingBattery = function () {
        return battery = 100;
    }

    //soạn và gửi tin nhắn
    this.editTexting = function (texting, mobile) {
        texting = prompt("enter message");
        if (confirm("send massage?") === true) {
            return sentbox.push(texting);
        }
        battery--;
    }

    //nhận tin nhắn
    this.reveiceMessage = function (Message) {
        inbox.push(Message);
        battery--;
    }

    //xem tin đã gửi
    this.checkSentbox = function () {
       return console.log(sentbox);
        battery--;
    }
}