hljs.initHighlightingOnLoad();

function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.body.className = themeName;
}
const slider = document.querySelector("#slider");
const today = document.querySelector("#todaydate");
const date = new Date();

today.innerHTML = new Intl.DateTimeFormat("en-Us", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour12: true,
  minute: "numeric",
  hour: "numeric",
  second: "numeric",
}).format(date);

function toggleTheme() {
  if (localStorage.getItem("theme") === "theme-light") {
    setTheme("theme-dark");
  } else {
    setTheme("theme-light");
  }
}
// <!-- Set slider initial position depending on the localstorage state -->

(function () {
  var sliderChecked = true;
  if (localStorage.getItem("theme") === "theme-light") {
    setTheme("theme-light");
    sliderChecked = false;
  } else {
    setTheme("theme-dark");
    sliderChecked = true;
  }
  $(document).ready(function () {
    document.getElementById("slider").checked = sliderChecked;
  });
})();

// <!-- Data Table Configuration -->

$(document).ready(function () {
  $(".datatable").DataTable({
    retrieve: true,
    paging: false,
    info: false,
    fixedColumns: {
      heightMatch: "none",
    },
  });
});

// <!-- Tooltip Configuration -->

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip({
    trigger: "hover",
  });
});

// <!-- Show/Hide The Folders -->
slider.addEventListener("change", () => {
  toggleTheme();
});

$("#openAll").on("click", function (e) {
  let clickCount = $(this).data("clickCount") || 1;
  switch (clickCount) {
    case 1:
      $("#folder-d6bdb175-3dcb-416b-8d84-e90dba2582ee-iteration-0").removeClass(
        "collapsed"
      );
      $(
        "#folder-collapse-d6bdb175-3dcb-416b-8d84-e90dba2582ee-iteration-0"
      ).addClass("show");
      $("#folder-d4a63cfa-efd7-4ced-984f-caf539f6c591-iteration-0").removeClass(
        "collapsed"
      );
      $(
        "#folder-collapse-d4a63cfa-efd7-4ced-984f-caf539f6c591-iteration-0"
      ).addClass("show");
      $("#folder-e48e03ac-dae0-4822-8003-342bd9925b2d-iteration-0").removeClass(
        "collapsed"
      );
      $(
        "#folder-collapse-e48e03ac-dae0-4822-8003-342bd9925b2d-iteration-0"
      ).addClass("show");
      $("#folder-0e36995c-30df-4476-a6f8-b2d7de0c3a9f-iteration-0").removeClass(
        "collapsed"
      );
      $(
        "#folder-collapse-0e36995c-30df-4476-a6f8-b2d7de0c3a9f-iteration-0"
      ).addClass("show");
      $("#folder-34770e43-454a-4036-a16e-a99bc735aaf9-iteration-0").removeClass(
        "collapsed"
      );
      $(
        "#folder-collapse-34770e43-454a-4036-a16e-a99bc735aaf9-iteration-0"
      ).addClass("show");
      $("#openAll").html("Collapse Folders");
      break;
    case 2:
      $("#folder-d6bdb175-3dcb-416b-8d84-e90dba2582ee-iteration-0").addClass(
        "collapsed"
      );
      $(
        "#folder-collapse-d6bdb175-3dcb-416b-8d84-e90dba2582ee-iteration-0"
      ).removeClass("show");
      $("#folder-d4a63cfa-efd7-4ced-984f-caf539f6c591-iteration-0").addClass(
        "collapsed"
      );
      $(
        "#folder-collapse-d4a63cfa-efd7-4ced-984f-caf539f6c591-iteration-0"
      ).removeClass("show");
      $("#folder-e48e03ac-dae0-4822-8003-342bd9925b2d-iteration-0").addClass(
        "collapsed"
      );
      $(
        "#folder-collapse-e48e03ac-dae0-4822-8003-342bd9925b2d-iteration-0"
      ).removeClass("show");
      $("#folder-0e36995c-30df-4476-a6f8-b2d7de0c3a9f-iteration-0").addClass(
        "collapsed"
      );
      $(
        "#folder-collapse-0e36995c-30df-4476-a6f8-b2d7de0c3a9f-iteration-0"
      ).removeClass("show");
      $("#folder-34770e43-454a-4036-a16e-a99bc735aaf9-iteration-0").addClass(
        "collapsed"
      );
      $(
        "#folder-collapse-34770e43-454a-4036-a16e-a99bc735aaf9-iteration-0"
      ).removeClass("show");
      $("#openAll").html("Expand Folders");
      break;
  }
  clickCount = clickCount > 1 ? 1 : ++clickCount;
  $(this).data("clickCount", clickCount);
});

// <!-- Show/Hide The Requests -->

$("#openAllRequests").on("click", function (e) {
  let clickCount = $(this).data("clickCount") || 1;
  switch (clickCount) {
    case 1:
      $("#requests-8907974a-7bc0-43d0-81c0-f0a1c34c0cdd").removeClass(
        "collapsed"
      );
      $("#collapse-8907974a-7bc0-43d0-81c0-f0a1c34c0cdd").removeClass(
        "collapsed"
      );
      $("#requests-8907974a-7bc0-43d0-81c0-f0a1c34c0cdd").addClass("show");
      $("#collapse-8907974a-7bc0-43d0-81c0-f0a1c34c0cdd").addClass("show");
      $("#requests-56c5b872-34a6-44ad-b4d5-f032d73237f8").removeClass(
        "collapsed"
      );
      $("#collapse-56c5b872-34a6-44ad-b4d5-f032d73237f8").removeClass(
        "collapsed"
      );
      $("#requests-56c5b872-34a6-44ad-b4d5-f032d73237f8").addClass("show");
      $("#collapse-56c5b872-34a6-44ad-b4d5-f032d73237f8").addClass("show");
      $("#requests-a663ba23-d728-4c4e-9d00-ea7ec17e0713").removeClass(
        "collapsed"
      );
      $("#collapse-a663ba23-d728-4c4e-9d00-ea7ec17e0713").removeClass(
        "collapsed"
      );
      $("#requests-a663ba23-d728-4c4e-9d00-ea7ec17e0713").addClass("show");
      $("#collapse-a663ba23-d728-4c4e-9d00-ea7ec17e0713").addClass("show");
      $("#requests-7014cc4a-10d0-433f-8821-c8213fce52c3").removeClass(
        "collapsed"
      );
      $("#collapse-7014cc4a-10d0-433f-8821-c8213fce52c3").removeClass(
        "collapsed"
      );
      $("#requests-7014cc4a-10d0-433f-8821-c8213fce52c3").addClass("show");
      $("#collapse-7014cc4a-10d0-433f-8821-c8213fce52c3").addClass("show");
      $("#requests-46fa8229-801c-4f6f-96b1-5eaea9dcc570").removeClass(
        "collapsed"
      );
      $("#collapse-46fa8229-801c-4f6f-96b1-5eaea9dcc570").removeClass(
        "collapsed"
      );
      $("#requests-46fa8229-801c-4f6f-96b1-5eaea9dcc570").addClass("show");
      $("#collapse-46fa8229-801c-4f6f-96b1-5eaea9dcc570").addClass("show");
      $("#requests-9921572e-e4b4-4a0a-a770-b17841ad98dd").removeClass(
        "collapsed"
      );
      $("#collapse-9921572e-e4b4-4a0a-a770-b17841ad98dd").removeClass(
        "collapsed"
      );
      $("#requests-9921572e-e4b4-4a0a-a770-b17841ad98dd").addClass("show");
      $("#collapse-9921572e-e4b4-4a0a-a770-b17841ad98dd").addClass("show");
      $("#requests-2d159bdc-daf7-468c-84b8-c656fab874a9").removeClass(
        "collapsed"
      );
      $("#collapse-2d159bdc-daf7-468c-84b8-c656fab874a9").removeClass(
        "collapsed"
      );
      $("#requests-2d159bdc-daf7-468c-84b8-c656fab874a9").addClass("show");
      $("#collapse-2d159bdc-daf7-468c-84b8-c656fab874a9").addClass("show");
      $("#requests-2c1dd7e6-ff8b-4385-a761-f89194fe2868").removeClass(
        "collapsed"
      );
      $("#collapse-2c1dd7e6-ff8b-4385-a761-f89194fe2868").removeClass(
        "collapsed"
      );
      $("#requests-2c1dd7e6-ff8b-4385-a761-f89194fe2868").addClass("show");
      $("#collapse-2c1dd7e6-ff8b-4385-a761-f89194fe2868").addClass("show");
      $("#requests-64cbc68d-3eff-4fc2-875d-38a58d7520ab").removeClass(
        "collapsed"
      );
      $("#collapse-64cbc68d-3eff-4fc2-875d-38a58d7520ab").removeClass(
        "collapsed"
      );
      $("#requests-64cbc68d-3eff-4fc2-875d-38a58d7520ab").addClass("show");
      $("#collapse-64cbc68d-3eff-4fc2-875d-38a58d7520ab").addClass("show");
      $("#requests-f57fe05f-41e4-472e-ae56-66d9ec105d7b").removeClass(
        "collapsed"
      );
      $("#collapse-f57fe05f-41e4-472e-ae56-66d9ec105d7b").removeClass(
        "collapsed"
      );
      $("#requests-f57fe05f-41e4-472e-ae56-66d9ec105d7b").addClass("show");
      $("#collapse-f57fe05f-41e4-472e-ae56-66d9ec105d7b").addClass("show");
      $("#requests-430cbdd5-52ea-40f2-9d91-f465aa87ad04").removeClass(
        "collapsed"
      );
      $("#collapse-430cbdd5-52ea-40f2-9d91-f465aa87ad04").removeClass(
        "collapsed"
      );
      $("#requests-430cbdd5-52ea-40f2-9d91-f465aa87ad04").addClass("show");
      $("#collapse-430cbdd5-52ea-40f2-9d91-f465aa87ad04").addClass("show");
      $("#requests-5cb33c45-1b3c-4551-bfa5-8f6d525c505f").removeClass(
        "collapsed"
      );
      $("#collapse-5cb33c45-1b3c-4551-bfa5-8f6d525c505f").removeClass(
        "collapsed"
      );
      $("#requests-5cb33c45-1b3c-4551-bfa5-8f6d525c505f").addClass("show");
      $("#collapse-5cb33c45-1b3c-4551-bfa5-8f6d525c505f").addClass("show");
      $("#requests-fe70642e-2996-4f0d-af54-c761069cc901").removeClass(
        "collapsed"
      );
      $("#collapse-fe70642e-2996-4f0d-af54-c761069cc901").removeClass(
        "collapsed"
      );
      $("#requests-fe70642e-2996-4f0d-af54-c761069cc901").addClass("show");
      $("#collapse-fe70642e-2996-4f0d-af54-c761069cc901").addClass("show");
      $("#requests-fb6a965f-0b74-486b-9864-0933526591c3").removeClass(
        "collapsed"
      );
      $("#collapse-fb6a965f-0b74-486b-9864-0933526591c3").removeClass(
        "collapsed"
      );
      $("#requests-fb6a965f-0b74-486b-9864-0933526591c3").addClass("show");
      $("#collapse-fb6a965f-0b74-486b-9864-0933526591c3").addClass("show");
      $("#requests-9dfb0ee8-14ad-4621-977b-f31640f1e0b0").removeClass(
        "collapsed"
      );
      $("#collapse-9dfb0ee8-14ad-4621-977b-f31640f1e0b0").removeClass(
        "collapsed"
      );
      $("#requests-9dfb0ee8-14ad-4621-977b-f31640f1e0b0").addClass("show");
      $("#collapse-9dfb0ee8-14ad-4621-977b-f31640f1e0b0").addClass("show");
      $("#requests-a96a2c4a-5dc1-4e8e-a5a1-1e3801c138cc").removeClass(
        "collapsed"
      );
      $("#collapse-a96a2c4a-5dc1-4e8e-a5a1-1e3801c138cc").removeClass(
        "collapsed"
      );
      $("#requests-a96a2c4a-5dc1-4e8e-a5a1-1e3801c138cc").addClass("show");
      $("#collapse-a96a2c4a-5dc1-4e8e-a5a1-1e3801c138cc").addClass("show");
      $("#requests-4097226e-70af-49c2-8967-c36bfd99fff8").removeClass(
        "collapsed"
      );
      $("#collapse-4097226e-70af-49c2-8967-c36bfd99fff8").removeClass(
        "collapsed"
      );
      $("#requests-4097226e-70af-49c2-8967-c36bfd99fff8").addClass("show");
      $("#collapse-4097226e-70af-49c2-8967-c36bfd99fff8").addClass("show");
      $("#requests-d4bd19ec-f029-4959-b8d2-679831f4dfce").removeClass(
        "collapsed"
      );
      $("#collapse-d4bd19ec-f029-4959-b8d2-679831f4dfce").removeClass(
        "collapsed"
      );
      $("#requests-d4bd19ec-f029-4959-b8d2-679831f4dfce").addClass("show");
      $("#collapse-d4bd19ec-f029-4959-b8d2-679831f4dfce").addClass("show");
      $("#requests-65a5c28a-c84e-459d-8e9b-2d7cca5af696").removeClass(
        "collapsed"
      );
      $("#collapse-65a5c28a-c84e-459d-8e9b-2d7cca5af696").removeClass(
        "collapsed"
      );
      $("#requests-65a5c28a-c84e-459d-8e9b-2d7cca5af696").addClass("show");
      $("#collapse-65a5c28a-c84e-459d-8e9b-2d7cca5af696").addClass("show");
      $("#requests-da0780fe-ec19-4c1a-8ec7-da1d81bf105b").removeClass(
        "collapsed"
      );
      $("#collapse-da0780fe-ec19-4c1a-8ec7-da1d81bf105b").removeClass(
        "collapsed"
      );
      $("#requests-da0780fe-ec19-4c1a-8ec7-da1d81bf105b").addClass("show");
      $("#collapse-da0780fe-ec19-4c1a-8ec7-da1d81bf105b").addClass("show");
      $("#requests-075db012-4fe7-4edf-8c02-e188b79b0a1f").removeClass(
        "collapsed"
      );
      $("#collapse-075db012-4fe7-4edf-8c02-e188b79b0a1f").removeClass(
        "collapsed"
      );
      $("#requests-075db012-4fe7-4edf-8c02-e188b79b0a1f").addClass("show");
      $("#collapse-075db012-4fe7-4edf-8c02-e188b79b0a1f").addClass("show");
      $("#requests-9b966f63-6fec-413e-8e3c-0aa03c272e7a").removeClass(
        "collapsed"
      );
      $("#collapse-9b966f63-6fec-413e-8e3c-0aa03c272e7a").removeClass(
        "collapsed"
      );
      $("#requests-9b966f63-6fec-413e-8e3c-0aa03c272e7a").addClass("show");
      $("#collapse-9b966f63-6fec-413e-8e3c-0aa03c272e7a").addClass("show");
      $("#requests-dde2b34e-3d75-4fc7-b846-263a424aecd4").removeClass(
        "collapsed"
      );
      $("#collapse-dde2b34e-3d75-4fc7-b846-263a424aecd4").removeClass(
        "collapsed"
      );
      $("#requests-dde2b34e-3d75-4fc7-b846-263a424aecd4").addClass("show");
      $("#collapse-dde2b34e-3d75-4fc7-b846-263a424aecd4").addClass("show");
      $("#requests-1a4416b3-a89f-4068-bf5c-0b428694d34c").removeClass(
        "collapsed"
      );
      $("#collapse-1a4416b3-a89f-4068-bf5c-0b428694d34c").removeClass(
        "collapsed"
      );
      $("#requests-1a4416b3-a89f-4068-bf5c-0b428694d34c").addClass("show");
      $("#collapse-1a4416b3-a89f-4068-bf5c-0b428694d34c").addClass("show");
      $("#requests-66cefce4-a674-41bd-a599-f33e0398d19a").removeClass(
        "collapsed"
      );
      $("#collapse-66cefce4-a674-41bd-a599-f33e0398d19a").removeClass(
        "collapsed"
      );
      $("#requests-66cefce4-a674-41bd-a599-f33e0398d19a").addClass("show");
      $("#collapse-66cefce4-a674-41bd-a599-f33e0398d19a").addClass("show");
      $("#requests-26162c26-9506-403c-85f4-8f3c04333eee").removeClass(
        "collapsed"
      );
      $("#collapse-26162c26-9506-403c-85f4-8f3c04333eee").removeClass(
        "collapsed"
      );
      $("#requests-26162c26-9506-403c-85f4-8f3c04333eee").addClass("show");
      $("#collapse-26162c26-9506-403c-85f4-8f3c04333eee").addClass("show");
      $("#requests-416388a2-17be-4af9-9cc8-40eaada9fc77").removeClass(
        "collapsed"
      );
      $("#collapse-416388a2-17be-4af9-9cc8-40eaada9fc77").removeClass(
        "collapsed"
      );
      $("#requests-416388a2-17be-4af9-9cc8-40eaada9fc77").addClass("show");
      $("#collapse-416388a2-17be-4af9-9cc8-40eaada9fc77").addClass("show");
      $("#requests-9c61ec2e-773b-4dd9-994b-410269481e67").removeClass(
        "collapsed"
      );
      $("#collapse-9c61ec2e-773b-4dd9-994b-410269481e67").removeClass(
        "collapsed"
      );
      $("#requests-9c61ec2e-773b-4dd9-994b-410269481e67").addClass("show");
      $("#collapse-9c61ec2e-773b-4dd9-994b-410269481e67").addClass("show");
      $("#requests-dd172df4-9bc2-4736-9ab4-89d0e0b2162d").removeClass(
        "collapsed"
      );
      $("#collapse-dd172df4-9bc2-4736-9ab4-89d0e0b2162d").removeClass(
        "collapsed"
      );
      $("#requests-dd172df4-9bc2-4736-9ab4-89d0e0b2162d").addClass("show");
      $("#collapse-dd172df4-9bc2-4736-9ab4-89d0e0b2162d").addClass("show");
      $("#requests-72b01e88-796a-4c96-999f-5f6a086eb62b").removeClass(
        "collapsed"
      );
      $("#collapse-72b01e88-796a-4c96-999f-5f6a086eb62b").removeClass(
        "collapsed"
      );
      $("#requests-72b01e88-796a-4c96-999f-5f6a086eb62b").addClass("show");
      $("#collapse-72b01e88-796a-4c96-999f-5f6a086eb62b").addClass("show");
      $("#openAllRequests").html("Collapse Requests");
      break;
    case 2:
      $("#requests-8907974a-7bc0-43d0-81c0-f0a1c34c0cdd").addClass("collapsed");
      $("#collapse-8907974a-7bc0-43d0-81c0-f0a1c34c0cdd").addClass("collapsed");
      $("#requests-8907974a-7bc0-43d0-81c0-f0a1c34c0cdd").removeClass("show");
      $("#collapse-8907974a-7bc0-43d0-81c0-f0a1c34c0cdd").removeClass("show");
      $("#requests-56c5b872-34a6-44ad-b4d5-f032d73237f8").addClass("collapsed");
      $("#collapse-56c5b872-34a6-44ad-b4d5-f032d73237f8").addClass("collapsed");
      $("#requests-56c5b872-34a6-44ad-b4d5-f032d73237f8").removeClass("show");
      $("#collapse-56c5b872-34a6-44ad-b4d5-f032d73237f8").removeClass("show");
      $("#requests-a663ba23-d728-4c4e-9d00-ea7ec17e0713").addClass("collapsed");
      $("#collapse-a663ba23-d728-4c4e-9d00-ea7ec17e0713").addClass("collapsed");
      $("#requests-a663ba23-d728-4c4e-9d00-ea7ec17e0713").removeClass("show");
      $("#collapse-a663ba23-d728-4c4e-9d00-ea7ec17e0713").removeClass("show");
      $("#requests-7014cc4a-10d0-433f-8821-c8213fce52c3").addClass("collapsed");
      $("#collapse-7014cc4a-10d0-433f-8821-c8213fce52c3").addClass("collapsed");
      $("#requests-7014cc4a-10d0-433f-8821-c8213fce52c3").removeClass("show");
      $("#collapse-7014cc4a-10d0-433f-8821-c8213fce52c3").removeClass("show");
      $("#requests-46fa8229-801c-4f6f-96b1-5eaea9dcc570").addClass("collapsed");
      $("#collapse-46fa8229-801c-4f6f-96b1-5eaea9dcc570").addClass("collapsed");
      $("#requests-46fa8229-801c-4f6f-96b1-5eaea9dcc570").removeClass("show");
      $("#collapse-46fa8229-801c-4f6f-96b1-5eaea9dcc570").removeClass("show");
      $("#requests-9921572e-e4b4-4a0a-a770-b17841ad98dd").addClass("collapsed");
      $("#collapse-9921572e-e4b4-4a0a-a770-b17841ad98dd").addClass("collapsed");
      $("#requests-9921572e-e4b4-4a0a-a770-b17841ad98dd").removeClass("show");
      $("#collapse-9921572e-e4b4-4a0a-a770-b17841ad98dd").removeClass("show");
      $("#requests-2d159bdc-daf7-468c-84b8-c656fab874a9").addClass("collapsed");
      $("#collapse-2d159bdc-daf7-468c-84b8-c656fab874a9").addClass("collapsed");
      $("#requests-2d159bdc-daf7-468c-84b8-c656fab874a9").removeClass("show");
      $("#collapse-2d159bdc-daf7-468c-84b8-c656fab874a9").removeClass("show");
      $("#requests-2c1dd7e6-ff8b-4385-a761-f89194fe2868").addClass("collapsed");
      $("#collapse-2c1dd7e6-ff8b-4385-a761-f89194fe2868").addClass("collapsed");
      $("#requests-2c1dd7e6-ff8b-4385-a761-f89194fe2868").removeClass("show");
      $("#collapse-2c1dd7e6-ff8b-4385-a761-f89194fe2868").removeClass("show");
      $("#requests-64cbc68d-3eff-4fc2-875d-38a58d7520ab").addClass("collapsed");
      $("#collapse-64cbc68d-3eff-4fc2-875d-38a58d7520ab").addClass("collapsed");
      $("#requests-64cbc68d-3eff-4fc2-875d-38a58d7520ab").removeClass("show");
      $("#collapse-64cbc68d-3eff-4fc2-875d-38a58d7520ab").removeClass("show");
      $("#requests-f57fe05f-41e4-472e-ae56-66d9ec105d7b").addClass("collapsed");
      $("#collapse-f57fe05f-41e4-472e-ae56-66d9ec105d7b").addClass("collapsed");
      $("#requests-f57fe05f-41e4-472e-ae56-66d9ec105d7b").removeClass("show");
      $("#collapse-f57fe05f-41e4-472e-ae56-66d9ec105d7b").removeClass("show");
      $("#requests-430cbdd5-52ea-40f2-9d91-f465aa87ad04").addClass("collapsed");
      $("#collapse-430cbdd5-52ea-40f2-9d91-f465aa87ad04").addClass("collapsed");
      $("#requests-430cbdd5-52ea-40f2-9d91-f465aa87ad04").removeClass("show");
      $("#collapse-430cbdd5-52ea-40f2-9d91-f465aa87ad04").removeClass("show");
      $("#requests-5cb33c45-1b3c-4551-bfa5-8f6d525c505f").addClass("collapsed");
      $("#collapse-5cb33c45-1b3c-4551-bfa5-8f6d525c505f").addClass("collapsed");
      $("#requests-5cb33c45-1b3c-4551-bfa5-8f6d525c505f").removeClass("show");
      $("#collapse-5cb33c45-1b3c-4551-bfa5-8f6d525c505f").removeClass("show");
      $("#requests-fe70642e-2996-4f0d-af54-c761069cc901").addClass("collapsed");
      $("#collapse-fe70642e-2996-4f0d-af54-c761069cc901").addClass("collapsed");
      $("#requests-fe70642e-2996-4f0d-af54-c761069cc901").removeClass("show");
      $("#collapse-fe70642e-2996-4f0d-af54-c761069cc901").removeClass("show");
      $("#requests-fb6a965f-0b74-486b-9864-0933526591c3").addClass("collapsed");
      $("#collapse-fb6a965f-0b74-486b-9864-0933526591c3").addClass("collapsed");
      $("#requests-fb6a965f-0b74-486b-9864-0933526591c3").removeClass("show");
      $("#collapse-fb6a965f-0b74-486b-9864-0933526591c3").removeClass("show");
      $("#requests-9dfb0ee8-14ad-4621-977b-f31640f1e0b0").addClass("collapsed");
      $("#collapse-9dfb0ee8-14ad-4621-977b-f31640f1e0b0").addClass("collapsed");
      $("#requests-9dfb0ee8-14ad-4621-977b-f31640f1e0b0").removeClass("show");
      $("#collapse-9dfb0ee8-14ad-4621-977b-f31640f1e0b0").removeClass("show");
      $("#requests-a96a2c4a-5dc1-4e8e-a5a1-1e3801c138cc").addClass("collapsed");
      $("#collapse-a96a2c4a-5dc1-4e8e-a5a1-1e3801c138cc").addClass("collapsed");
      $("#requests-a96a2c4a-5dc1-4e8e-a5a1-1e3801c138cc").removeClass("show");
      $("#collapse-a96a2c4a-5dc1-4e8e-a5a1-1e3801c138cc").removeClass("show");
      $("#requests-4097226e-70af-49c2-8967-c36bfd99fff8").addClass("collapsed");
      $("#collapse-4097226e-70af-49c2-8967-c36bfd99fff8").addClass("collapsed");
      $("#requests-4097226e-70af-49c2-8967-c36bfd99fff8").removeClass("show");
      $("#collapse-4097226e-70af-49c2-8967-c36bfd99fff8").removeClass("show");
      $("#requests-d4bd19ec-f029-4959-b8d2-679831f4dfce").addClass("collapsed");
      $("#collapse-d4bd19ec-f029-4959-b8d2-679831f4dfce").addClass("collapsed");
      $("#requests-d4bd19ec-f029-4959-b8d2-679831f4dfce").removeClass("show");
      $("#collapse-d4bd19ec-f029-4959-b8d2-679831f4dfce").removeClass("show");
      $("#requests-65a5c28a-c84e-459d-8e9b-2d7cca5af696").addClass("collapsed");
      $("#collapse-65a5c28a-c84e-459d-8e9b-2d7cca5af696").addClass("collapsed");
      $("#requests-65a5c28a-c84e-459d-8e9b-2d7cca5af696").removeClass("show");
      $("#collapse-65a5c28a-c84e-459d-8e9b-2d7cca5af696").removeClass("show");
      $("#requests-da0780fe-ec19-4c1a-8ec7-da1d81bf105b").addClass("collapsed");
      $("#collapse-da0780fe-ec19-4c1a-8ec7-da1d81bf105b").addClass("collapsed");
      $("#requests-da0780fe-ec19-4c1a-8ec7-da1d81bf105b").removeClass("show");
      $("#collapse-da0780fe-ec19-4c1a-8ec7-da1d81bf105b").removeClass("show");
      $("#requests-075db012-4fe7-4edf-8c02-e188b79b0a1f").addClass("collapsed");
      $("#collapse-075db012-4fe7-4edf-8c02-e188b79b0a1f").addClass("collapsed");
      $("#requests-075db012-4fe7-4edf-8c02-e188b79b0a1f").removeClass("show");
      $("#collapse-075db012-4fe7-4edf-8c02-e188b79b0a1f").removeClass("show");
      $("#requests-9b966f63-6fec-413e-8e3c-0aa03c272e7a").addClass("collapsed");
      $("#collapse-9b966f63-6fec-413e-8e3c-0aa03c272e7a").addClass("collapsed");
      $("#requests-9b966f63-6fec-413e-8e3c-0aa03c272e7a").removeClass("show");
      $("#collapse-9b966f63-6fec-413e-8e3c-0aa03c272e7a").removeClass("show");
      $("#requests-dde2b34e-3d75-4fc7-b846-263a424aecd4").addClass("collapsed");
      $("#collapse-dde2b34e-3d75-4fc7-b846-263a424aecd4").addClass("collapsed");
      $("#requests-dde2b34e-3d75-4fc7-b846-263a424aecd4").removeClass("show");
      $("#collapse-dde2b34e-3d75-4fc7-b846-263a424aecd4").removeClass("show");
      $("#requests-1a4416b3-a89f-4068-bf5c-0b428694d34c").addClass("collapsed");
      $("#collapse-1a4416b3-a89f-4068-bf5c-0b428694d34c").addClass("collapsed");
      $("#requests-1a4416b3-a89f-4068-bf5c-0b428694d34c").removeClass("show");
      $("#collapse-1a4416b3-a89f-4068-bf5c-0b428694d34c").removeClass("show");
      $("#requests-66cefce4-a674-41bd-a599-f33e0398d19a").addClass("collapsed");
      $("#collapse-66cefce4-a674-41bd-a599-f33e0398d19a").addClass("collapsed");
      $("#requests-66cefce4-a674-41bd-a599-f33e0398d19a").removeClass("show");
      $("#collapse-66cefce4-a674-41bd-a599-f33e0398d19a").removeClass("show");
      $("#requests-26162c26-9506-403c-85f4-8f3c04333eee").addClass("collapsed");
      $("#collapse-26162c26-9506-403c-85f4-8f3c04333eee").addClass("collapsed");
      $("#requests-26162c26-9506-403c-85f4-8f3c04333eee").removeClass("show");
      $("#collapse-26162c26-9506-403c-85f4-8f3c04333eee").removeClass("show");
      $("#requests-416388a2-17be-4af9-9cc8-40eaada9fc77").addClass("collapsed");
      $("#collapse-416388a2-17be-4af9-9cc8-40eaada9fc77").addClass("collapsed");
      $("#requests-416388a2-17be-4af9-9cc8-40eaada9fc77").removeClass("show");
      $("#collapse-416388a2-17be-4af9-9cc8-40eaada9fc77").removeClass("show");
      $("#requests-9c61ec2e-773b-4dd9-994b-410269481e67").addClass("collapsed");
      $("#collapse-9c61ec2e-773b-4dd9-994b-410269481e67").addClass("collapsed");
      $("#requests-9c61ec2e-773b-4dd9-994b-410269481e67").removeClass("show");
      $("#collapse-9c61ec2e-773b-4dd9-994b-410269481e67").removeClass("show");
      $("#requests-dd172df4-9bc2-4736-9ab4-89d0e0b2162d").addClass("collapsed");
      $("#collapse-dd172df4-9bc2-4736-9ab4-89d0e0b2162d").addClass("collapsed");
      $("#requests-dd172df4-9bc2-4736-9ab4-89d0e0b2162d").removeClass("show");
      $("#collapse-dd172df4-9bc2-4736-9ab4-89d0e0b2162d").removeClass("show");
      $("#requests-72b01e88-796a-4c96-999f-5f6a086eb62b").addClass("collapsed");
      $("#collapse-72b01e88-796a-4c96-999f-5f6a086eb62b").addClass("collapsed");
      $("#requests-72b01e88-796a-4c96-999f-5f6a086eb62b").removeClass("show");
      $("#collapse-72b01e88-796a-4c96-999f-5f6a086eb62b").removeClass("show");
      $("#openAllRequests").html("Expand Requests");
      break;
  }
  clickCount = clickCount > 1 ? 1 : ++clickCount;
  $(this).data("clickCount", clickCount);
});

// <!-- Show/Hide The Skipped Tests -->

$("#openAllSkipped").on("click", function (e) {
  let clickCount = $(this).data("clickCount") || 1;
  switch (clickCount) {
    case 1:
      $("#skipped-8907974a-7bc0-43d0-81c0-f0a1c34c0cdd").removeClass(
        "collapsed"
      );
      $("#skipped-collapse-8907974a-7bc0-43d0-81c0-f0a1c34c0cdd").removeClass(
        "collapsed"
      );
      $("#skipped-8907974a-7bc0-43d0-81c0-f0a1c34c0cdd").addClass("show");
      $("#skipped-collapse-8907974a-7bc0-43d0-81c0-f0a1c34c0cdd").addClass(
        "show"
      );
      $("#skipped-56c5b872-34a6-44ad-b4d5-f032d73237f8").removeClass(
        "collapsed"
      );
      $("#skipped-collapse-56c5b872-34a6-44ad-b4d5-f032d73237f8").removeClass(
        "collapsed"
      );
      $("#skipped-56c5b872-34a6-44ad-b4d5-f032d73237f8").addClass("show");
      $("#skipped-collapse-56c5b872-34a6-44ad-b4d5-f032d73237f8").addClass(
        "show"
      );
      $("#skipped-a663ba23-d728-4c4e-9d00-ea7ec17e0713").removeClass(
        "collapsed"
      );
      $("#skipped-collapse-a663ba23-d728-4c4e-9d00-ea7ec17e0713").removeClass(
        "collapsed"
      );
      $("#skipped-a663ba23-d728-4c4e-9d00-ea7ec17e0713").addClass("show");
      $("#skipped-collapse-a663ba23-d728-4c4e-9d00-ea7ec17e0713").addClass(
        "show"
      );
      $("#skipped-7014cc4a-10d0-433f-8821-c8213fce52c3").removeClass(
        "collapsed"
      );
      $("#skipped-collapse-7014cc4a-10d0-433f-8821-c8213fce52c3").removeClass(
        "collapsed"
      );
      $("#skipped-7014cc4a-10d0-433f-8821-c8213fce52c3").addClass("show");
      $("#skipped-collapse-7014cc4a-10d0-433f-8821-c8213fce52c3").addClass(
        "show"
      );
      $("#skipped-46fa8229-801c-4f6f-96b1-5eaea9dcc570").removeClass(
        "collapsed"
      );
      $("#skipped-collapse-46fa8229-801c-4f6f-96b1-5eaea9dcc570").removeClass(
        "collapsed"
      );
      $("#skipped-46fa8229-801c-4f6f-96b1-5eaea9dcc570").addClass("show");
      $("#skipped-collapse-46fa8229-801c-4f6f-96b1-5eaea9dcc570").addClass(
        "show"
      );
      $("#skipped-9921572e-e4b4-4a0a-a770-b17841ad98dd").removeClass(
        "collapsed"
      );
      $("#skipped-collapse-9921572e-e4b4-4a0a-a770-b17841ad98dd").removeClass(
        "collapsed"
      );
      $("#skipped-9921572e-e4b4-4a0a-a770-b17841ad98dd").addClass("show");
      $("#skipped-collapse-9921572e-e4b4-4a0a-a770-b17841ad98dd").addClass(
        "show"
      );
      $("#skipped-2d159bdc-daf7-468c-84b8-c656fab874a9").removeClass(
        "collapsed"
      );
      $("#skipped-collapse-2d159bdc-daf7-468c-84b8-c656fab874a9").removeClass(
        "collapsed"
      );
      $("#skipped-2d159bdc-daf7-468c-84b8-c656fab874a9").addClass("show");
      $("#skipped-collapse-2d159bdc-daf7-468c-84b8-c656fab874a9").addClass(
        "show"
      );
      $("#skipped-2c1dd7e6-ff8b-4385-a761-f89194fe2868").removeClass(
        "collapsed"
      );
      $("#skipped-collapse-2c1dd7e6-ff8b-4385-a761-f89194fe2868").removeClass(
        "collapsed"
      );
      $("#skipped-2c1dd7e6-ff8b-4385-a761-f89194fe2868").addClass("show");
      $("#skipped-collapse-2c1dd7e6-ff8b-4385-a761-f89194fe2868").addClass(
        "show"
      );
      $("#skipped-64cbc68d-3eff-4fc2-875d-38a58d7520ab").removeClass(
        "collapsed"
      );
      $("#skipped-collapse-64cbc68d-3eff-4fc2-875d-38a58d7520ab").removeClass(
        "collapsed"
      );
      $("#skipped-64cbc68d-3eff-4fc2-875d-38a58d7520ab").addClass("show");
      $("#skipped-collapse-64cbc68d-3eff-4fc2-875d-38a58d7520ab").addClass(
        "show"
      );
      $("#skipped-f57fe05f-41e4-472e-ae56-66d9ec105d7b").removeClass(
        "collapsed"
      );
      $("#skipped-collapse-f57fe05f-41e4-472e-ae56-66d9ec105d7b").removeClass(
        "collapsed"
      );
      $("#skipped-f57fe05f-41e4-472e-ae56-66d9ec105d7b").addClass("show");
      $("#skipped-collapse-f57fe05f-41e4-472e-ae56-66d9ec105d7b").addClass(
        "show"
      );
      $("#skipped-430cbdd5-52ea-40f2-9d91-f465aa87ad04").removeClass(
        "collapsed"
      );
      $("#skipped-collapse-430cbdd5-52ea-40f2-9d91-f465aa87ad04").removeClass(
        "collapsed"
      );
      $("#skipped-430cbdd5-52ea-40f2-9d91-f465aa87ad04").addClass("show");
      $("#skipped-collapse-430cbdd5-52ea-40f2-9d91-f465aa87ad04").addClass(
        "show"
      );
      $("#skipped-5cb33c45-1b3c-4551-bfa5-8f6d525c505f").removeClass(
        "collapsed"
      );
      $("#skipped-collapse-5cb33c45-1b3c-4551-bfa5-8f6d525c505f").removeClass(
        "collapsed"
      );
      $("#skipped-5cb33c45-1b3c-4551-bfa5-8f6d525c505f").addClass("show");
      $("#skipped-collapse-5cb33c45-1b3c-4551-bfa5-8f6d525c505f").addClass(
        "show"
      );
      $("#skipped-fe70642e-2996-4f0d-af54-c761069cc901").removeClass(
        "collapsed"
      );
      $("#skipped-collapse-fe70642e-2996-4f0d-af54-c761069cc901").removeClass(
        "collapsed"
      );
      $("#skipped-fe70642e-2996-4f0d-af54-c761069cc901").addClass("show");
      $("#skipped-collapse-fe70642e-2996-4f0d-af54-c761069cc901").addClass(
        "show"
      );
      $("#skipped-fb6a965f-0b74-486b-9864-0933526591c3").removeClass(
        "collapsed"
      );
      $("#skipped-collapse-fb6a965f-0b74-486b-9864-0933526591c3").removeClass(
        "collapsed"
      );
      $("#skipped-fb6a965f-0b74-486b-9864-0933526591c3").addClass("show");
      $("#skipped-collapse-fb6a965f-0b74-486b-9864-0933526591c3").addClass(
        "show"
      );
      $("#skipped-9dfb0ee8-14ad-4621-977b-f31640f1e0b0").removeClass(
        "collapsed"
      );
      $("#skipped-collapse-9dfb0ee8-14ad-4621-977b-f31640f1e0b0").removeClass(
        "collapsed"
      );
      $("#skipped-9dfb0ee8-14ad-4621-977b-f31640f1e0b0").addClass("show");
      $("#skipped-collapse-9dfb0ee8-14ad-4621-977b-f31640f1e0b0").addClass(
        "show"
      );
      $("#skipped-a96a2c4a-5dc1-4e8e-a5a1-1e3801c138cc").removeClass(
        "collapsed"
      );
      $("#skipped-collapse-a96a2c4a-5dc1-4e8e-a5a1-1e3801c138cc").removeClass(
        "collapsed"
      );
      $("#skipped-a96a2c4a-5dc1-4e8e-a5a1-1e3801c138cc").addClass("show");
      $("#skipped-collapse-a96a2c4a-5dc1-4e8e-a5a1-1e3801c138cc").addClass(
        "show"
      );
      $("#skipped-4097226e-70af-49c2-8967-c36bfd99fff8").removeClass(
        "collapsed"
      );
      $("#skipped-collapse-4097226e-70af-49c2-8967-c36bfd99fff8").removeClass(
        "collapsed"
      );
      $("#skipped-4097226e-70af-49c2-8967-c36bfd99fff8").addClass("show");
      $("#skipped-collapse-4097226e-70af-49c2-8967-c36bfd99fff8").addClass(
        "show"
      );
      $("#skipped-d4bd19ec-f029-4959-b8d2-679831f4dfce").removeClass(
        "collapsed"
      );
      $("#skipped-collapse-d4bd19ec-f029-4959-b8d2-679831f4dfce").removeClass(
        "collapsed"
      );
      $("#skipped-d4bd19ec-f029-4959-b8d2-679831f4dfce").addClass("show");
      $("#skipped-collapse-d4bd19ec-f029-4959-b8d2-679831f4dfce").addClass(
        "show"
      );
      $("#skipped-65a5c28a-c84e-459d-8e9b-2d7cca5af696").removeClass(
        "collapsed"
      );
      $("#skipped-collapse-65a5c28a-c84e-459d-8e9b-2d7cca5af696").removeClass(
        "collapsed"
      );
      $("#skipped-65a5c28a-c84e-459d-8e9b-2d7cca5af696").addClass("show");
      $("#skipped-collapse-65a5c28a-c84e-459d-8e9b-2d7cca5af696").addClass(
        "show"
      );
      $("#skipped-da0780fe-ec19-4c1a-8ec7-da1d81bf105b").removeClass(
        "collapsed"
      );
      $("#skipped-collapse-da0780fe-ec19-4c1a-8ec7-da1d81bf105b").removeClass(
        "collapsed"
      );
      $("#skipped-da0780fe-ec19-4c1a-8ec7-da1d81bf105b").addClass("show");
      $("#skipped-collapse-da0780fe-ec19-4c1a-8ec7-da1d81bf105b").addClass(
        "show"
      );
      $("#skipped-075db012-4fe7-4edf-8c02-e188b79b0a1f").removeClass(
        "collapsed"
      );
      $("#skipped-collapse-075db012-4fe7-4edf-8c02-e188b79b0a1f").removeClass(
        "collapsed"
      );
      $("#skipped-075db012-4fe7-4edf-8c02-e188b79b0a1f").addClass("show");
      $("#skipped-collapse-075db012-4fe7-4edf-8c02-e188b79b0a1f").addClass(
        "show"
      );
      $("#skipped-9b966f63-6fec-413e-8e3c-0aa03c272e7a").removeClass(
        "collapsed"
      );
      $("#skipped-collapse-9b966f63-6fec-413e-8e3c-0aa03c272e7a").removeClass(
        "collapsed"
      );
      $("#skipped-9b966f63-6fec-413e-8e3c-0aa03c272e7a").addClass("show");
      $("#skipped-collapse-9b966f63-6fec-413e-8e3c-0aa03c272e7a").addClass(
        "show"
      );
      $("#skipped-dde2b34e-3d75-4fc7-b846-263a424aecd4").removeClass(
        "collapsed"
      );
      $("#skipped-collapse-dde2b34e-3d75-4fc7-b846-263a424aecd4").removeClass(
        "collapsed"
      );
      $("#skipped-dde2b34e-3d75-4fc7-b846-263a424aecd4").addClass("show");
      $("#skipped-collapse-dde2b34e-3d75-4fc7-b846-263a424aecd4").addClass(
        "show"
      );
      $("#skipped-1a4416b3-a89f-4068-bf5c-0b428694d34c").removeClass(
        "collapsed"
      );
      $("#skipped-collapse-1a4416b3-a89f-4068-bf5c-0b428694d34c").removeClass(
        "collapsed"
      );
      $("#skipped-1a4416b3-a89f-4068-bf5c-0b428694d34c").addClass("show");
      $("#skipped-collapse-1a4416b3-a89f-4068-bf5c-0b428694d34c").addClass(
        "show"
      );
      $("#skipped-66cefce4-a674-41bd-a599-f33e0398d19a").removeClass(
        "collapsed"
      );
      $("#skipped-collapse-66cefce4-a674-41bd-a599-f33e0398d19a").removeClass(
        "collapsed"
      );
      $("#skipped-66cefce4-a674-41bd-a599-f33e0398d19a").addClass("show");
      $("#skipped-collapse-66cefce4-a674-41bd-a599-f33e0398d19a").addClass(
        "show"
      );
      $("#skipped-26162c26-9506-403c-85f4-8f3c04333eee").removeClass(
        "collapsed"
      );
      $("#skipped-collapse-26162c26-9506-403c-85f4-8f3c04333eee").removeClass(
        "collapsed"
      );
      $("#skipped-26162c26-9506-403c-85f4-8f3c04333eee").addClass("show");
      $("#skipped-collapse-26162c26-9506-403c-85f4-8f3c04333eee").addClass(
        "show"
      );
      $("#skipped-416388a2-17be-4af9-9cc8-40eaada9fc77").removeClass(
        "collapsed"
      );
      $("#skipped-collapse-416388a2-17be-4af9-9cc8-40eaada9fc77").removeClass(
        "collapsed"
      );
      $("#skipped-416388a2-17be-4af9-9cc8-40eaada9fc77").addClass("show");
      $("#skipped-collapse-416388a2-17be-4af9-9cc8-40eaada9fc77").addClass(
        "show"
      );
      $("#skipped-9c61ec2e-773b-4dd9-994b-410269481e67").removeClass(
        "collapsed"
      );
      $("#skipped-collapse-9c61ec2e-773b-4dd9-994b-410269481e67").removeClass(
        "collapsed"
      );
      $("#skipped-9c61ec2e-773b-4dd9-994b-410269481e67").addClass("show");
      $("#skipped-collapse-9c61ec2e-773b-4dd9-994b-410269481e67").addClass(
        "show"
      );
      $("#skipped-dd172df4-9bc2-4736-9ab4-89d0e0b2162d").removeClass(
        "collapsed"
      );
      $("#skipped-collapse-dd172df4-9bc2-4736-9ab4-89d0e0b2162d").removeClass(
        "collapsed"
      );
      $("#skipped-dd172df4-9bc2-4736-9ab4-89d0e0b2162d").addClass("show");
      $("#skipped-collapse-dd172df4-9bc2-4736-9ab4-89d0e0b2162d").addClass(
        "show"
      );
      $("#skipped-72b01e88-796a-4c96-999f-5f6a086eb62b").removeClass(
        "collapsed"
      );
      $("#skipped-collapse-72b01e88-796a-4c96-999f-5f6a086eb62b").removeClass(
        "collapsed"
      );
      $("#skipped-72b01e88-796a-4c96-999f-5f6a086eb62b").addClass("show");
      $("#skipped-collapse-72b01e88-796a-4c96-999f-5f6a086eb62b").addClass(
        "show"
      );
      $("#openAllSkipped").html("Collapse All Skipped Tests");
      break;
    case 2:
      $("#skipped-8907974a-7bc0-43d0-81c0-f0a1c34c0cdd").addClass("collapsed");
      $("#skipped-collapse-8907974a-7bc0-43d0-81c0-f0a1c34c0cdd").addClass(
        "collapsed"
      );
      $("#skipped-8907974a-7bc0-43d0-81c0-f0a1c34c0cdd").removeClass("show");
      $("#skipped-collapse-8907974a-7bc0-43d0-81c0-f0a1c34c0cdd").removeClass(
        "show"
      );
      $("#skipped-56c5b872-34a6-44ad-b4d5-f032d73237f8").addClass("collapsed");
      $("#skipped-collapse-56c5b872-34a6-44ad-b4d5-f032d73237f8").addClass(
        "collapsed"
      );
      $("#skipped-56c5b872-34a6-44ad-b4d5-f032d73237f8").removeClass("show");
      $("#skipped-collapse-56c5b872-34a6-44ad-b4d5-f032d73237f8").removeClass(
        "show"
      );
      $("#skipped-a663ba23-d728-4c4e-9d00-ea7ec17e0713").addClass("collapsed");
      $("#skipped-collapse-a663ba23-d728-4c4e-9d00-ea7ec17e0713").addClass(
        "collapsed"
      );
      $("#skipped-a663ba23-d728-4c4e-9d00-ea7ec17e0713").removeClass("show");
      $("#skipped-collapse-a663ba23-d728-4c4e-9d00-ea7ec17e0713").removeClass(
        "show"
      );
      $("#skipped-7014cc4a-10d0-433f-8821-c8213fce52c3").addClass("collapsed");
      $("#skipped-collapse-7014cc4a-10d0-433f-8821-c8213fce52c3").addClass(
        "collapsed"
      );
      $("#skipped-7014cc4a-10d0-433f-8821-c8213fce52c3").removeClass("show");
      $("#skipped-collapse-7014cc4a-10d0-433f-8821-c8213fce52c3").removeClass(
        "show"
      );
      $("#skipped-46fa8229-801c-4f6f-96b1-5eaea9dcc570").addClass("collapsed");
      $("#skipped-collapse-46fa8229-801c-4f6f-96b1-5eaea9dcc570").addClass(
        "collapsed"
      );
      $("#skipped-46fa8229-801c-4f6f-96b1-5eaea9dcc570").removeClass("show");
      $("#skipped-collapse-46fa8229-801c-4f6f-96b1-5eaea9dcc570").removeClass(
        "show"
      );
      $("#skipped-9921572e-e4b4-4a0a-a770-b17841ad98dd").addClass("collapsed");
      $("#skipped-collapse-9921572e-e4b4-4a0a-a770-b17841ad98dd").addClass(
        "collapsed"
      );
      $("#skipped-9921572e-e4b4-4a0a-a770-b17841ad98dd").removeClass("show");
      $("#skipped-collapse-9921572e-e4b4-4a0a-a770-b17841ad98dd").removeClass(
        "show"
      );
      $("#skipped-2d159bdc-daf7-468c-84b8-c656fab874a9").addClass("collapsed");
      $("#skipped-collapse-2d159bdc-daf7-468c-84b8-c656fab874a9").addClass(
        "collapsed"
      );
      $("#skipped-2d159bdc-daf7-468c-84b8-c656fab874a9").removeClass("show");
      $("#skipped-collapse-2d159bdc-daf7-468c-84b8-c656fab874a9").removeClass(
        "show"
      );
      $("#skipped-2c1dd7e6-ff8b-4385-a761-f89194fe2868").addClass("collapsed");
      $("#skipped-collapse-2c1dd7e6-ff8b-4385-a761-f89194fe2868").addClass(
        "collapsed"
      );
      $("#skipped-2c1dd7e6-ff8b-4385-a761-f89194fe2868").removeClass("show");
      $("#skipped-collapse-2c1dd7e6-ff8b-4385-a761-f89194fe2868").removeClass(
        "show"
      );
      $("#skipped-64cbc68d-3eff-4fc2-875d-38a58d7520ab").addClass("collapsed");
      $("#skipped-collapse-64cbc68d-3eff-4fc2-875d-38a58d7520ab").addClass(
        "collapsed"
      );
      $("#skipped-64cbc68d-3eff-4fc2-875d-38a58d7520ab").removeClass("show");
      $("#skipped-collapse-64cbc68d-3eff-4fc2-875d-38a58d7520ab").removeClass(
        "show"
      );
      $("#skipped-f57fe05f-41e4-472e-ae56-66d9ec105d7b").addClass("collapsed");
      $("#skipped-collapse-f57fe05f-41e4-472e-ae56-66d9ec105d7b").addClass(
        "collapsed"
      );
      $("#skipped-f57fe05f-41e4-472e-ae56-66d9ec105d7b").removeClass("show");
      $("#skipped-collapse-f57fe05f-41e4-472e-ae56-66d9ec105d7b").removeClass(
        "show"
      );
      $("#skipped-430cbdd5-52ea-40f2-9d91-f465aa87ad04").addClass("collapsed");
      $("#skipped-collapse-430cbdd5-52ea-40f2-9d91-f465aa87ad04").addClass(
        "collapsed"
      );
      $("#skipped-430cbdd5-52ea-40f2-9d91-f465aa87ad04").removeClass("show");
      $("#skipped-collapse-430cbdd5-52ea-40f2-9d91-f465aa87ad04").removeClass(
        "show"
      );
      $("#skipped-5cb33c45-1b3c-4551-bfa5-8f6d525c505f").addClass("collapsed");
      $("#skipped-collapse-5cb33c45-1b3c-4551-bfa5-8f6d525c505f").addClass(
        "collapsed"
      );
      $("#skipped-5cb33c45-1b3c-4551-bfa5-8f6d525c505f").removeClass("show");
      $("#skipped-collapse-5cb33c45-1b3c-4551-bfa5-8f6d525c505f").removeClass(
        "show"
      );
      $("#skipped-fe70642e-2996-4f0d-af54-c761069cc901").addClass("collapsed");
      $("#skipped-collapse-fe70642e-2996-4f0d-af54-c761069cc901").addClass(
        "collapsed"
      );
      $("#skipped-fe70642e-2996-4f0d-af54-c761069cc901").removeClass("show");
      $("#skipped-collapse-fe70642e-2996-4f0d-af54-c761069cc901").removeClass(
        "show"
      );
      $("#skipped-fb6a965f-0b74-486b-9864-0933526591c3").addClass("collapsed");
      $("#skipped-collapse-fb6a965f-0b74-486b-9864-0933526591c3").addClass(
        "collapsed"
      );
      $("#skipped-fb6a965f-0b74-486b-9864-0933526591c3").removeClass("show");
      $("#skipped-collapse-fb6a965f-0b74-486b-9864-0933526591c3").removeClass(
        "show"
      );
      $("#skipped-9dfb0ee8-14ad-4621-977b-f31640f1e0b0").addClass("collapsed");
      $("#skipped-collapse-9dfb0ee8-14ad-4621-977b-f31640f1e0b0").addClass(
        "collapsed"
      );
      $("#skipped-9dfb0ee8-14ad-4621-977b-f31640f1e0b0").removeClass("show");
      $("#skipped-collapse-9dfb0ee8-14ad-4621-977b-f31640f1e0b0").removeClass(
        "show"
      );
      $("#skipped-a96a2c4a-5dc1-4e8e-a5a1-1e3801c138cc").addClass("collapsed");
      $("#skipped-collapse-a96a2c4a-5dc1-4e8e-a5a1-1e3801c138cc").addClass(
        "collapsed"
      );
      $("#skipped-a96a2c4a-5dc1-4e8e-a5a1-1e3801c138cc").removeClass("show");
      $("#skipped-collapse-a96a2c4a-5dc1-4e8e-a5a1-1e3801c138cc").removeClass(
        "show"
      );
      $("#skipped-4097226e-70af-49c2-8967-c36bfd99fff8").addClass("collapsed");
      $("#skipped-collapse-4097226e-70af-49c2-8967-c36bfd99fff8").addClass(
        "collapsed"
      );
      $("#skipped-4097226e-70af-49c2-8967-c36bfd99fff8").removeClass("show");
      $("#skipped-collapse-4097226e-70af-49c2-8967-c36bfd99fff8").removeClass(
        "show"
      );
      $("#skipped-d4bd19ec-f029-4959-b8d2-679831f4dfce").addClass("collapsed");
      $("#skipped-collapse-d4bd19ec-f029-4959-b8d2-679831f4dfce").addClass(
        "collapsed"
      );
      $("#skipped-d4bd19ec-f029-4959-b8d2-679831f4dfce").removeClass("show");
      $("#skipped-collapse-d4bd19ec-f029-4959-b8d2-679831f4dfce").removeClass(
        "show"
      );
      $("#skipped-65a5c28a-c84e-459d-8e9b-2d7cca5af696").addClass("collapsed");
      $("#skipped-collapse-65a5c28a-c84e-459d-8e9b-2d7cca5af696").addClass(
        "collapsed"
      );
      $("#skipped-65a5c28a-c84e-459d-8e9b-2d7cca5af696").removeClass("show");
      $("#skipped-collapse-65a5c28a-c84e-459d-8e9b-2d7cca5af696").removeClass(
        "show"
      );
      $("#skipped-da0780fe-ec19-4c1a-8ec7-da1d81bf105b").addClass("collapsed");
      $("#skipped-collapse-da0780fe-ec19-4c1a-8ec7-da1d81bf105b").addClass(
        "collapsed"
      );
      $("#skipped-da0780fe-ec19-4c1a-8ec7-da1d81bf105b").removeClass("show");
      $("#skipped-collapse-da0780fe-ec19-4c1a-8ec7-da1d81bf105b").removeClass(
        "show"
      );
      $("#skipped-075db012-4fe7-4edf-8c02-e188b79b0a1f").addClass("collapsed");
      $("#skipped-collapse-075db012-4fe7-4edf-8c02-e188b79b0a1f").addClass(
        "collapsed"
      );
      $("#skipped-075db012-4fe7-4edf-8c02-e188b79b0a1f").removeClass("show");
      $("#skipped-collapse-075db012-4fe7-4edf-8c02-e188b79b0a1f").removeClass(
        "show"
      );
      $("#skipped-9b966f63-6fec-413e-8e3c-0aa03c272e7a").addClass("collapsed");
      $("#skipped-collapse-9b966f63-6fec-413e-8e3c-0aa03c272e7a").addClass(
        "collapsed"
      );
      $("#skipped-9b966f63-6fec-413e-8e3c-0aa03c272e7a").removeClass("show");
      $("#skipped-collapse-9b966f63-6fec-413e-8e3c-0aa03c272e7a").removeClass(
        "show"
      );
      $("#skipped-dde2b34e-3d75-4fc7-b846-263a424aecd4").addClass("collapsed");
      $("#skipped-collapse-dde2b34e-3d75-4fc7-b846-263a424aecd4").addClass(
        "collapsed"
      );
      $("#skipped-dde2b34e-3d75-4fc7-b846-263a424aecd4").removeClass("show");
      $("#skipped-collapse-dde2b34e-3d75-4fc7-b846-263a424aecd4").removeClass(
        "show"
      );
      $("#skipped-1a4416b3-a89f-4068-bf5c-0b428694d34c").addClass("collapsed");
      $("#skipped-collapse-1a4416b3-a89f-4068-bf5c-0b428694d34c").addClass(
        "collapsed"
      );
      $("#skipped-1a4416b3-a89f-4068-bf5c-0b428694d34c").removeClass("show");
      $("#skipped-collapse-1a4416b3-a89f-4068-bf5c-0b428694d34c").removeClass(
        "show"
      );
      $("#skipped-66cefce4-a674-41bd-a599-f33e0398d19a").addClass("collapsed");
      $("#skipped-collapse-66cefce4-a674-41bd-a599-f33e0398d19a").addClass(
        "collapsed"
      );
      $("#skipped-66cefce4-a674-41bd-a599-f33e0398d19a").removeClass("show");
      $("#skipped-collapse-66cefce4-a674-41bd-a599-f33e0398d19a").removeClass(
        "show"
      );
      $("#skipped-26162c26-9506-403c-85f4-8f3c04333eee").addClass("collapsed");
      $("#skipped-collapse-26162c26-9506-403c-85f4-8f3c04333eee").addClass(
        "collapsed"
      );
      $("#skipped-26162c26-9506-403c-85f4-8f3c04333eee").removeClass("show");
      $("#skipped-collapse-26162c26-9506-403c-85f4-8f3c04333eee").removeClass(
        "show"
      );
      $("#skipped-416388a2-17be-4af9-9cc8-40eaada9fc77").addClass("collapsed");
      $("#skipped-collapse-416388a2-17be-4af9-9cc8-40eaada9fc77").addClass(
        "collapsed"
      );
      $("#skipped-416388a2-17be-4af9-9cc8-40eaada9fc77").removeClass("show");
      $("#skipped-collapse-416388a2-17be-4af9-9cc8-40eaada9fc77").removeClass(
        "show"
      );
      $("#skipped-9c61ec2e-773b-4dd9-994b-410269481e67").addClass("collapsed");
      $("#skipped-collapse-9c61ec2e-773b-4dd9-994b-410269481e67").addClass(
        "collapsed"
      );
      $("#skipped-9c61ec2e-773b-4dd9-994b-410269481e67").removeClass("show");
      $("#skipped-collapse-9c61ec2e-773b-4dd9-994b-410269481e67").removeClass(
        "show"
      );
      $("#skipped-dd172df4-9bc2-4736-9ab4-89d0e0b2162d").addClass("collapsed");
      $("#skipped-collapse-dd172df4-9bc2-4736-9ab4-89d0e0b2162d").addClass(
        "collapsed"
      );
      $("#skipped-dd172df4-9bc2-4736-9ab4-89d0e0b2162d").removeClass("show");
      $("#skipped-collapse-dd172df4-9bc2-4736-9ab4-89d0e0b2162d").removeClass(
        "show"
      );
      $("#skipped-72b01e88-796a-4c96-999f-5f6a086eb62b").addClass("collapsed");
      $("#skipped-collapse-72b01e88-796a-4c96-999f-5f6a086eb62b").addClass(
        "collapsed"
      );
      $("#skipped-72b01e88-796a-4c96-999f-5f6a086eb62b").removeClass("show");
      $("#skipped-collapse-72b01e88-796a-4c96-999f-5f6a086eb62b").removeClass(
        "show"
      );
      $("#openAllSkipped").html("Expand All Skipped Tests");
      break;
  }
  clickCount = clickCount > 1 ? 1 : ++clickCount;
  $(this).data("clickCount", clickCount);
});

// <!-- Show/Hide The Failures -->

$("#openAllFailed").on("click", function (e) {
  let clickCount = $(this).data("clickCount") || 1;
  let failedItemContent;
  let failedItemHeading;
  switch (clickCount) {
    case 1:
      $("#openAllFailed").html("Collapse All Failed Tests");
      break;
    case 2:
      $("#openAllFailed").html("Expand All Failed Tests");
      break;
  }
  clickCount = clickCount > 1 ? 1 : ++clickCount;
  $(this).data("clickCount", clickCount);
});

// <!-- Pretty Print the Response Body-->

function isJSON(data) {
  var ret = true;
  try {
    JSON.parse(data);
  } catch (e) {
    ret = false;
  }
  return ret;
}

function isXML(data) {
  return data.length > 0 && data[0] === "<";
}

// see https://gist.github.com/sente/1083506/d2834134cd070dbcc08bf42ee27dabb746a1c54d#gistcomment-2254622
function formatXML(data) {
  const PADDING = " ".repeat(2); // set desired indent size here
  const reg = /(>)(<)(\/*)/g;
  let pad = 0;
  xml = data.replace(reg, "$1\r\n$2$3");

  return xml
    .split("\r\n")
    .map((node, index) => {
      let indent = 0;
      if (node.match(/.+<\/\w[^>]*>$/)) {
        indent = 0;
      } else if (node.match(/^<\/\w/) && pad > 0) {
        pad -= 1;
      } else if (node.match(/^<\w[^>]*[^\/]>.*$/)) {
        indent = 1;
      } else {
        indent = 0;
      }

      pad += indent;
      return PADDING.repeat(pad - indent) + node;
    })
    .join("\r\n");
}

$(".prettyPrint").each(function () {
  var data = $(this).text();
  // Verify whether data is JSON
  if (isJSON(data)) {
    obj = JSON.parse(data);
    data = JSON.stringify(obj, null, 2);
  } else if (isXML(data)) {
    data = formatXML(data);
  }
  $(this).text(data);
});

// <!-- Copy Response Body To Clipboard -->

var clipboard = new ClipboardJS(".copyButton");

clipboard.on("success", function (e) {
  e.clearSelection();
  $(".copyButton").addClass("bg-success text-white");
  e.trigger.textContent = "✔ Copied!";
  window.setTimeout(function () {
    $(".copyButton").removeClass("bg-success text-white");
    e.trigger.textContent = "Copy to Clipboard";
  }, 2000);
});
clipboard.on("error", function (e) {
  e.clearSelection();
  $(".copyButton").addClass("bg-danger text-white");
  e.trigger.textContent = "✗ Not Copied";
  window.setTimeout(function () {
    $(".copyButton").removeClass("bg-danger text-white");
    e.trigger.textContent = "Copy to Clipboard";
  }, 2000);
});

// <!-- Render the Description Markdown and link in the test failures -->

const remarkable = new Remarkable();

const descriptions = document.querySelectorAll(".renderMarkdown");
descriptions.forEach((description) => {
  description.innerHTML = renderHtmlFromMarkdown(description.textContent);
});
function renderHtmlFromMarkdown(markdown) {
  return remarkable.render(trim(markdown));
}
function trim(string) {
  return string ? string.replace(/^ +| +$/gm, "") : string;
}

// <!-- Show/Hide The Toggles When Scrolling The Page -->

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topOfRequestsScreen").style.display = "block";
    document.getElementById("topOfFailuresScreen").style.display = "block";
    document.getElementById("topOfSkippedScreen").style.display = "block";
    document.getElementById("openAll").style.display = "none";
    document.getElementById("openAllRequests").style.display = "none";
  } else {
    document.getElementById("topOfRequestsScreen").style.display = "none";
    document.getElementById("topOfFailuresScreen").style.display = "none";
    document.getElementById("topOfSkippedScreen").style.display = "none";
    document.getElementById("openAll").style.display = "block";
    document.getElementById("openAllRequests").style.display = "block";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// <!-- Creates The Iteration Tabs -->

("use strict");

window.onload = function () {
  // set display for all blocks of response
  var allItems = document.querySelectorAll("[class*=iteration-]");
  allItems.forEach(function (elem) {
    elem.style.display = "block";
  });

  let totalIterations = 1;

  let menu = document.querySelector("#execution-menu .nav");

  for (var i = 0; i < totalIterations; i++) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(i + 1));
    li.setAttribute("id", "iteration-" + i);
    li.classList.add("custom-tab");
    li.classList.add("itPassed");

    li.addEventListener("click", function () {
      //set display to none for all except row
      let allItems = document.querySelectorAll("[class*=iteration-]:not(.row)");
      allItems.forEach(function (elem) {
        elem.style.display = "none";
      });

      let allMenus = document.querySelectorAll("[id*=iteration-]");
      allMenus.forEach(function (elem) {
        elem.style.borderBottom = "none";
      });

      this.style.borderBottom = "solid 3px #032a33";

      let items = document.querySelectorAll("." + this.id + ":not(.row)");
      items.forEach(function (elem) {
        elem.style.display = elem.style.display == "block" ? "none" : "block";
      });
    });
    menu.appendChild(li);
  }

  //shows first tab data
  document.getElementById("iteration-0").click();
  document.getElementById("iterationSelected").innerHTML = `Iteration ${
    document.getElementById("iteration-0").innerHTML
  } selected`;
};

// <!-- Create the Selected Iteration Label -->

$(document).ready(function () {
  $(function () {
    $("#iterationList li").click(function () {
      document.getElementById("iterationSelected").innerHTML =
        "Iteration " + this.innerHTML + " selected";
    });
  });
});

// <!-- Filter Action for the Iterations -->

$("#filterInput").on("input paste", function () {
  var value = $(this).val();
  $("#iterationList li").filter(function () {
    $("#showOnlyFailures").data("clickCount")
      ? $("#showOnlyFailures").click()
      : null;
    $(this).toggle($(this).text().indexOf(value) > -1);
  });
});

// <!-- Showing the Failed Interations -->

$("#showOnlyFailures").on("click", function (e) {
  let clickCount = $(this).data("clickCount") || 1;
  $("#filterInput").val() != "" && clickCount == 1
    ? $("#filterInput").val("").trigger("input")
    : null;
  let selectedIteration = $("#iterationList li").filter(function () {
    return (
      $(this).css("border-bottom").indexOf("solid") > -1 &&
      $(this).hasClass("itFailed")
    );
  });
  selectedIteration.length || clickCount > 1
    ? null
    : $("#iterationList li.itFailed")[0].click();
  $("#iterationList li.itPassed").toggle();
  $("div.bg-success [id*=requests]")
    .parents('[class^="row iteration-"]')
    .toggle();
  clickCount = clickCount > 1 ? 1 : ++clickCount;
  clickCount > 1
    ? $("#showOnlyFailures").html("Show All Iterations")
    : $("#showOnlyFailures").html("Show Failed Iterations");
  $(this).data("clickCount", clickCount);
});
