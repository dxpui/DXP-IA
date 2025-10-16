"use strict";
const menu = document.querySelector(".menu");
let subMenu;

function menuMain() {
    $(".menu-main").click(function (e) {
        if (e.target.closest(".menu-item-has-children")) {
            const hasChildren = e.target.closest(".menu-item-has-children");
            showSubMenu(hasChildren); // need discussion
        }
    })
}

// Esc functionality
$(document).on('keydown', function (e) {
    if (e.keyCode === 27) { // ESC
        $('.header .menu>ul>li> button').removeAttr('tabindex')
        $('.menu').removeClass('active');
        $('.sub-menu').removeClass('active');
        $(".sub-menu").removeClass("sub-menu-show");
        $(".fa-angle-down").removeClass("rotate-arrow");
    }
    else if (e.keyCode === 13) {//enter
        menuMain();
    }
});

$(".menu-main").click(function () {
    menuMain();
});

function goBack() {
    $(".go-back").on('click', function (e) {
        e.stopPropagation();
        hideSubMenu();
        $('.header .menu>ul>li> button').removeAttr('tabindex')
    })
}

function menuTrigger() {
    $(".mobile-menu-trigger").click(function () {
        toggleMenu();
    })
}

function closeMenu() {
    $(".mobile-menu-close").click(function () {
        toggleMenu();
        $('.header .menu>ul>li> button').removeAttr('tabindex')
    })
}

function menuOverlay() {
    $(".menu-overlay").click(function () {
        toggleMenu();
    })
}
function toggleMenu() {
    $(".menu").toggleClass("active");
    $(".menu-overlay").toggleClass("active");
    $('.search-form').removeClass("active");
    $("#search-icon i").removeClass("fa-times");
}

function showSubMenu(hasChildren) {
    subMenu = hasChildren.querySelector(".sub-menu");
    subMenu.classList.add("active");
    subMenu.style.animation = "slideLeft 0.5s ease forwards";
    const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
    $(".menu .mobile-menu-head").addClass("active");
    $(".menu .current-menu-title").text(menuTitle);
    if ($(".menu").hasClass("mobile-menu-head")) {
        $('.header .menu>ul>li> button').attr('tabindex', '-1');
    }
}

function hideSubMenu() {
    subMenu.style.animation = "slideRight 0.5s ease forwards";
    setTimeout(() => {
        subMenu.classList.remove("active");
    }, 300);
    $(".mobile-menu-head").removeClass("active");
    $(".menu .current-menu-title").text("");
    $(".menu .mobile-menu-head").removeClass("active");
}

window.onresize = function () {
    if (this.innerWidth > 991) {
        if ($(".menu").hasClass("active")) {
            toggleMenu();
        }
    }
}

function searchIcon() {
    $('#search-icon').click(function () {
        $('#search-icon i').toggleClass("fa-times");
        $('.search-form').toggleClass("active");
        $(".menu").removeClass("fa-times");
        $(".menu").removeClass("active");
        $(".menu-overlay").removeClass("active");
        $(".mobile-nav-toggle").removeClass("btn-close close-bars");
    })
    $('.search-icons').keypress(function (event) {
        var id = event.keyCode;
        if (id == 13) {
            $('#search-icon').trigger('click');
        }
    });
}

window.onscroll = () => {
    $(".menu").removeClass("fa-times");

}



//********************Main Menu**********************

$(document).ready(function () {

    if ($("#showSubTopic").val() != undefined) {
        $(".subtopic-filter").removeClass("d-none");
    }

    // Filter Dropdown
    if ($("#TopicDropdown").length > 0) {
        VirtualSelect.init({
            ele: '#TopicDropdown',
            hideClearButton: true,
            disableSelectAll: true,
            silentInitialValueSet: true,
            showDropboxAsPopup: false,
        });
    }

    if ($("#SubtopicDropdown").length > 0) {
        VirtualSelect.init({
            ele: '#SubtopicDropdown',
            hideClearButton: true,
            disableSelectAll: true,
            silentInitialValueSet: true,
            showDropboxAsPopup: false,
        });
    }

    if ($("#ContentDropdown").length > 0) {
        VirtualSelect.init({
            ele: '#ContentDropdown',
            hideClearButton: true,
            disableSelectAll: true,
            silentInitialValueSet: true,
            showDropboxAsPopup: false,
        });
    }

    if ($("#StatusDropdown").length > 0) {
        VirtualSelect.init({
            ele: '#StatusDropdown',
            hideClearButton: true,
            disableSelectAll: true,
            silentInitialValueSet: true,
            showDropboxAsPopup: false,
        });
    }

    if ($("#NewsTypeDropdown").length > 0) {
        VirtualSelect.init({
            ele: '#NewsTypeDropdown',
            hideClearButton: true,
            disableSelectAll: true,
            silentInitialValueSet: true,
            showDropboxAsPopup: false,
        });
    }
    if ($("#dd_resultstodisplay").length > 0) {
        VirtualSelect.init({
            ele: '#dd_resultstodisplay',
            hideClearButton: true,
            disableSelectAll: true,
            silentInitialValueSet: true,
            showDropboxAsPopup: false,
        });
    }
    if ($("#dd_short_Type").length > 0) {
        VirtualSelect.init({
            ele: '#dd_short_Type',
            hideClearButton: true,
            disableSelectAll: true,
            silentInitialValueSet: true,
            showDropboxAsPopup: false,
        });
    }

    // Filter Position
    if (localStorage['ScrollPositionX'] !== "null") {
        $(window).scrollTop(localStorage['ScrollPositionX']);
        localStorage['ScrollPositionX'] = "null";
    }

    $(".menu-item-has-children").click(function () {
        if ($(this).children(".sub-menu").hasClass("sub-menu-show")) {
            $(this).children(".sub-menu").removeClass("sub-menu-show");
            $(this).find(".fa-angle-down").removeClass("rotate-arrow");
        }
        else {
            $(".menu-item-has-children .sub-menu").removeClass("sub-menu-show");
            $(this).children(".sub-menu").addClass("sub-menu-show");
            $(".menu-item-has-children .fa-angle-down").removeClass("rotate-arrow");
            $(this).find(".fa-angle-down").addClass("rotate-arrow");
        }
        $(".search-form").removeClass("active");
        $("#search-icon i").removeClass("fa-times");
    });
    $("#search-icon").click(function () {
        $(".menu-item-has-children .sub-menu").removeClass("sub-menu-show");
        $(".menu-item-has-children .fa-angle-down").removeClass("rotate-arrow");
    })

    $(".mobile-menu-trigger").click(function () {
        $(".mobile-nav-toggle").toggleClass("btn-close close-bars");
        $("body").toggleClass("overflow-hidden");
    });

    $(".filters-content").click(function () {
        $("body").addClass("overflow-x-hidden")
    });

    if ($('.carousel-count').length > 0) {
        carouselCount()
    }

    if ($(".menu-main").length > 0) {
        menuMain()
    }

    if ($(".go-back").length > 0) {
        goBack()
    }

    if ($(".mobile-menu-trigger").length > 0) {
        menuTrigger()
    }

    if ($(".mobile-menu-close").length > 0) {
        closeMenu()
    }

    if ($(".menu-overlay").length > 0) {
        menuOverlay()
    }

    if ($('#search-icon').length > 0) {
        searchIcon()
    }

    if ($('.searchInput').length > 0) {
        lookupTable()
    }

    // Video playlist
    if ($('#video-player').length > 0) {
        videoPlayer()
    }

    // Static callout
    if ($('.counter').length > 0) {
        counterNumber()
    }

    // Swiper for Teaser
    // if ($('.homepage-carousel-cls').length > 0) {
    //     teaserSwiper()
    // }

    // // Swiper for News Carousel
    // if ($('.news-container-area').length > 0) {
    //     teaserSwiper()
    // }

    // Vimeo player
    if ($('.video-playlist-cls').length > 0) {
        vimeoVideoPlayer()
    }

    // escape to hide submenu
    $(document).on('keydown', function (e) {
        if (e.keyCode === 27 && $('.menu').hasClass('active')) { // ESC
            $('.menu').removeClass('active');
            $(".mobile-nav-toggle").toggleClass("btn-close close-bars");
        }
    });

    //********************Search and Filters**********************

    // Submit Search Form
    $("#btnsubmit").on("click", function () {
        submitFilters();
    });

    // Submit Sort By Filter
    $(".results-input").on("input", function () {
        $("#ddsort li").removeAttr("select");
        $("#SortBy").val("");
    });

    $("#ddsort li").click(function () {
        if ($(this).attr("select")) {
            $(this).removeAttr("select");
        } else {
            $(this).attr("select", "true");
        }
    })

    $('ul.SortBy-dropdown li').on("click", function () {
        $("#SortBy").val($(this).attr("data-value"));
        filterPostion();

        if ($("#contentTypeForm").length > 0) {
            $("#contentTypeForm").trigger("submit");
        }
        if ($("#newsCentreForm").length > 0) {
            $("#newsCentreForm").trigger("submit");
        }
        if ($("#subTopicForm").length > 0) {
            $("#subTopicForm").trigger("submit");
        }
        if ($("#collectionForm").length > 0) {
            $("#collectionForm").trigger("submit");
        }
        if ($("#searchForm").length > 0) {
            $("#searchForm").trigger("submit");
        }
    });

    // Submit Result to Display
    $(".results-input").on("input", function () {
        $("#ddResultToDisplay li").removeAttr("select");
        $("#NativeSelect").val("");
    });

    $("#ddResultToDisplay li").click(function () {
        if ($(this).attr("select")) {
            $(this).removeAttr("select");
        } else {
            $(this).attr("select", "true");
        }
    })

    $('ul.resultToDisplay-dropdown  li').on("click", function () {
        $("#NativeSelect").val($(this).attr("data-value"));
        filterPostion();

        if ($("#contentTypeForm").length > 0) {
            $("#contentTypeForm").trigger("submit");
        }
        if ($("#newsCentreForm").length > 0) {
            $("#newsCentreForm").trigger("submit");
        }
        if ($("#subTopicForm").length > 0) {
            $("#subTopicForm").trigger("submit");
        }
        if ($("#collectionForm").length > 0) {
            $("#collectionForm").trigger("submit");
        }
        if ($("#searchForm").length > 0) {
            $("#searchForm").trigger("submit");
        }
    });


    if ($("#TopicDropdown").length > 0) {
        document.querySelector('#TopicDropdown').addEventListener('change', function () {
            var topic = document.querySelector('#TopicDropdown').value;
            getSubTopicsList(topic);
        });
    }

    if ($("#ContentDropdown").length > 0) {
        document.querySelector('#ContentDropdown').addEventListener('change', function () {
            var ContentList = this.value;
            if (ContentList.length <= 0) {
                $(".status-filter").addClass("d-none");
                document.querySelector("#StatusDropdown").disable();
                return;
            }

            GetStatusFilterList(ContentList);
        });
    }

    if ($("#showSubTopic").val() != undefined) {
        $(".subtopic-filter").removeClass("d-none");
    }

    if ($("#showStatusFilter").val()) {
        $(".status-filter").removeClass("d-none");
    }


    // Search Auto complete
    if ($('#globalquery').length > 0) {
        autoCompleteSearch(document.getElementById("globalquery"), $("#searchLink").val(), "#globalSearch")
    }

    if ($('#contentTypeForm').length > 0) {
        autoCompleteSearch(document.getElementById("query"), $("#pageLink").val(), "#contentTypeForm")
    }

    if ($('#searchForm').length > 0) {
        autoCompleteSearch(document.getElementById("query"), $("#pageLink").val(), "#searchForm")
    }

    if ($('#newsCentreForm').length > 0) {
        autoCompleteSearch(document.getElementById("query"), $("#pageLink").val(), "#newsCentreForm")
    }

    if ($('#subTopicForm').length > 0) {
        autoCompleteSearch(document.getElementById("query"), $("#pageLink").val(), "#subTopicForm")
    }

    if ($('#collectionForm').length > 0) {
        autoCompleteSearch(document.getElementById("query"), $("#pageLink").val(), "#collectionForm")
    }

    // Toast Block
    var timeVal = $("#ToastTime").val();
    setTimeout(function () {
        if ($('.toast-notification').length > 0) {
            $('.toast-notification').remove();
        }
    }, parseInt(timeVal) * 1000);

    if ($('.toast-notification').length > 0) {
        $(".toast-notification .close-toast").click(function (e) {
            e.preventDefault();
            $(".toast-notification").remove();
        });
    }
});

$(".carousel-count .carousel-inner .carousel-item img").click(function () {
    var myModal = new bootstrap.Modal(document.querySelector('.carousel-count-fullsize-img-class'))
    myModal.show();
    $(".carousel-count-fullsize-img-class img").attr({ src: $(this).attr("src"), alt: $(this).attr("alt") });
});

$(".carousel-count-fullsize-img-class .btn-close").click(function () {
    var myModal = new bootstrap.Modal(document.querySelector('.carousel-count-fullsize-img-class'))
    myModal.hide();
});

$(".carousel-count .carousel-inner .carousel-item").on("keydown", function (event) {
    var id = event.keyCode;
    if (id == 13) {
        $("#carousel-count .carousel-inner .carousel-item img").trigger('click');
        $(".carousel-count-fullsize-img-class img").attr({ src: $(this).attr("src"), alt: $(this).attr("alt") });
    }
});

function carouselCount() {
    var totalItems = $('.carousel-count .carousel-item').length;

    var currentIndex = $('.carousel-count div.active').index() + 1;
    $('.carouselnumber').html('' + currentIndex + '/' + totalItems + '');
    var myCarousel = document.getElementById('carousel-count');
}

//********************Filter and Sorting**********************

function filterPostion() {
    localStorage["ScrollPositionX"] = $(window).scrollTop();
}

function globalSearch() {
    $("#globalSearch").trigger('submit');
}

function localSearch() {
    clearAllFilters();
    submitFilters();
}

function searchForm() {
    filterPostion();
    clearAllFilters();
    $("#searchForm").trigger('submit');
}

function submitFilters() {
    filterPostion();

    if ($("#contentTypeForm").length > 0) {
        $("#contentTypeForm").trigger("submit");
    }
    if ($("#newsCentreForm").length > 0) {
        $("#newsCentreForm").trigger("submit");
    }
    if ($("#subTopicForm").length > 0) {
        $("#subTopicForm").trigger("submit");
    }
    if ($("#collectionForm").length > 0) {
        $("#collectionForm").trigger("submit");
    }
    if ($("#searchForm").length > 0) {
        $("#searchForm").trigger("submit");
    }
}

function removeTopicFilter() {
    if ($("#TopicDropdown").length > 0) {
        document.querySelector('#TopicDropdown').reset();
    }
    if ($("#SubtopicDropdown").length > 0) {
        document.querySelector('#SubtopicDropdown').reset();
    }
    submitFilters();
}

function removeSubTopicFilter(id) {
    if ($("#SubtopicDropdown").length > 0) {
        var subtop = document.querySelector('#SubtopicDropdown').value;
        for (var i = 0; i < subtop.length; i++) {
            if (subtop[i] == id) {
                subtop.splice(i, 1);
            }
        }
        document.querySelector('#SubtopicDropdown').setValue(subtop);
    }
    submitFilters();
}

function removeContentFilter(id) {
    if ($("#ContentDropdown").length > 0) {
        var contentType = document.querySelector('#ContentDropdown').value;
        for (var i = 0; i < contentType.length; i++) {
            if (contentType[i] == id) {
                contentType.splice(i, 1);
            }
        }
        document.querySelector('#ContentDropdown').setValue(contentType);
    }
    submitFilters();
}

function removeshortTypeFilter() {
    if ($("#dd_short_Type").length > 0) {
        document.querySelector('#dd_short_Type').reset();
    }
    submitFilters();
}

function removeStatusFilter(id) {
    if ($("#StatusDropdown").length > 0) {
        var stat = document.querySelector('#StatusDropdown').value;
        for (var i = 0; i < stat.length; i++) {
            if (stat[i] == id) {
                stat.splice(i, 1);
            }
        }
        document.querySelector('#StatusDropdown').setValue(stat);
    }
    submitFilters();
}

function removeNewsTypeFilter() {
    if ($("#NewsTypeDropdown").length > 0) {
        document.querySelector('#NewsTypeDropdown').reset();
    }
    submitFilters();
}

function removeAfterDateFilter() {
    if ($("#UpdatedAfter").length > 0) {
        $("#UpdatedAfter").val("");
    }
    submitFilters();
}

function removeBeforeDateFilter() {
    if ($("#UpdatedBefore").length > 0) {
        $("#UpdatedBefore").val("");
    }
    submitFilters();
}

function clearAllFilters() {
    if ($("#TopicDropdown").length > 0) {
        document.querySelector('#TopicDropdown').reset();
    }
    if ($("#SubtopicDropdown").length > 0) {
        document.querySelector('#SubtopicDropdown').reset();
    }
    if ($("#ContentDropdown").length > 0) {
        document.querySelector('#ContentDropdown').reset();
    }
    if ($("#dd_short_Type").length > 0) {
        document.querySelector('#dd_short_Type').reset();
    }
    if ($("#StatusDropdown").length > 0) {
        document.querySelector('#StatusDropdown').reset();
    }
    if ($("#NewsTypeDropdown").length > 0) {
        document.querySelector('#NewsTypeDropdown').reset();
    }
    if ($("#UpdatedAfter").length > 0) {
        $("#UpdatedAfter").val("");
    }
    if ($("#UpdatedBefore").length > 0) {
        $("#UpdatedBefore").val("");
    }
    if ($("#IncludePDF").length > 0) {
        $("#IncludePDF").prop("checked", false);
    }
    if ($("#dd_resultstodisplay").length > 0) {
        document.querySelector('#dd_resultstodisplay').reset();
    }
    
}

function removeAllFilters() {
    clearAllFilters();
    submitFilters();
}

//********************Pagination**********************

function updatePageQuery(value) {
    if (value == 'undefined' || value == null)
        return;

    localStorage["ScrollPositionX"] = $('.results-top').offset().top;
    var url = window.location.href;
    var key = 'PageNo';
    var re = new RegExp("([?&])" + key + "=.*?(&|#|$)(.*)", "gi"), hash;

    if (re.test(url)) {
        if (typeof value !== 'undefined' && value !== null) {
            url = url.replace(re, '$1' + key + "=" + value + '$2$3');
            window.location = url;
            return;
        }
        else {
            hash = url.split('#');
            url = hash[0].replace(re, '$1$3').replace(/(&|\?)$/, '');
            if (typeof hash[1] !== 'undefined' && hash[1] !== null) {
                url += '#' + hash[1];
            }
            window.location = url;
            return;
        }
    }
    else {
        if (typeof value !== 'undefined' && value !== null) {
            var separator = url.indexOf('?') !== -1 ? '&' : '?';
            hash = url.split('#');
            url = hash[0] + separator + key + '=' + value;
            if (typeof hash[1] !== 'undefined' && hash[1] !== null) {
                url += '#' + hash[1];
            }
            window.location = url;
            return;
        }
        else {
            return;
        }
    }
}

//********************Subtopic Dropdown**********************

function getSubTopicsList(topic) {
    if (topic != null) {
        if ($("#SubtopicDropdown").length <= 0)
            return;

        $(".subtopic-filter").addClass("d-none");
        document.querySelector("#SubtopicDropdown").disable();

        var cnt = 0;
        var query = "";
        if ($('#query').val() != undefined)
            query = $('#query').val();

        var contentId = "";
        if ($('#contentTypeId').val() != undefined)
            contentId = $('#contentTypeId').val();

        var pagelink = "";
        if ($('#pageLink').val() != undefined)
            pagelink = $('#pageLink').val();

        $.ajax({
            type: "POST",
            url: pagelink + '/GetSubTopics?query=' + query + '&topic=' + topic + '&id=' + contentId,
            data: topic,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.isSucceed) {
                    if (response.result == null) {
                        return;
                    }
                    var opt = [];
                    for (i = 0; i < response.result.length; i++) {
                        if (response.result[i] != null) {
                            opt.push({
                                label: response.result[i].name,
                                value: response.result[i].value
                            });
                            cnt++;
                        }
                    }
                    document.querySelector("#SubtopicDropdown").setOptions(opt);
                    if (cnt > 0) {
                        document.querySelector("#SubtopicDropdown").enable();
                        $(".subtopic-filter").removeClass("d-none");
                    }
                }
            },
            error: function (xhr, status, errorThrown) {
                return;
            }
        });
    }
}

//********************Get Status filter List**********************
function GetStatusFilterList(contents) {
    if (contents != null) {
        if ($("#ContentDropdown").length <= 0)
            return;

        $(".status-filter").addClass("d-none");
        var cnt = 0;
        var query = "";
        if ($('#query').val() != undefined)
            query = $('#query').val();

        var pagelink = "";
        if ($('#pageLink').val() != undefined)
            pagelink = $('#pageLink').val();
        $.ajax({
            type: "POST",
            url: pagelink + '/GetStatusFilters?query=' + encodeURIComponent(query),
            data: JSON.stringify(contents),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.isSucceed) {
                    if (response.result == null) {
                        $(".status-filter").addClass("d-none");
                        document.querySelector("#StatusDropdown").disable();
                        return;
                    }
                    var opt = [];
                    for (i = 0; i < response.result.length; i++) {
                        if (response.result[i] != null) {
                            opt.push({
                                label: response.result[i].name,
                                value: response.result[i].value
                            });
                            cnt++;
                        }
                    }
                    document.querySelector("#StatusDropdown").setOptions(opt);
                    if (cnt > 0) {
                        document.querySelector("#StatusDropdown").enable();
                        $(".status-filter").removeClass("d-none");
                    }
                }
            },
            error: function (xhr, status, errorThrown) {
                return;
            }
        });
    }
}

//********************Auto Complete**********************

function autoCompleteSearch(inp, pagelink, formid) {
    var currentFocus;
    if (inp != null) {
        inp.addEventListener("input", function (e) {
            var a, b, i, val = this.value;
            closeAllLists();

            if (val.length < 3) { return; }
            currentFocus = -1;
            a = document.createElement("DIV");
            a.setAttribute("id", this.id + "autocomplete-list");
            a.setAttribute("class", "autocomplete-items");
            this.parentNode.appendChild(a);
            var contentId = "";
            if ($('#contentTypeId').val() != undefined)
                contentId = $('#contentTypeId').val();
            var strval = val.trim().toLowerCase().replace(/[^a-z0-9-\u00A3\s]/gi, '');
            $.ajax({
                type: "POST",
                url: pagelink + '/GetAutocomplete?term=' + strval + '&id=' + contentId,
                data: strval,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    if (response.isSucceed) {
                        if (response.result == null) {
                            return;
                        }

                        var inpval = val.toLowerCase()
                        for (i = 0; i < response.result.length; i++) {
                            if (response.result[i] != null) {
                                b = document.createElement("DIV");
                                var suggval = response.result[i].toLowerCase().replace(/[^a-z0-9-\u00A3\s]/gi, '');
                                b.innerHTML = suggval.replace(inpval, "<strong>" + inpval + "</strong>");
                                b.innerHTML += "<input type='hidden' value='" + suggval + "'>";
                                b.addEventListener("click", function (e) {
                                    inp.value = this.getElementsByTagName("input")[0].value;
                                    clearAllFilters();
                                    filterPostion();
                                    closeAllLists();
                                    $(formid).trigger('submit');
                                });
                                a.appendChild(b);
                            }
                        }
                    }
                },
                error: function (xhr, status, errorThrown) {
                    return;
                }
            });
        });

        inp.addEventListener("keyup", function (e) {
            if ($('#' + inp.id).is(":focus") && (e.keyCode == 13)) {
                clearAllFilters();
                filterPostion();
                $(formid).trigger('submit');
            }
        });

        inp.addEventListener("keydown", function (e) {
            var x = document.getElementById(this.id + "autocomplete-list");
            if (x) x = x.getElementsByTagName("div");
            if (e.keyCode == 40) {
                currentFocus++;
                addActive(x);
            } else if (e.keyCode == 38) {
                currentFocus--;
                addActive(x);
            } else if (e.keyCode == 13) {
                e.preventDefault();
                if (currentFocus > -1) {
                    if (x) x[currentFocus].click();
                }
            }
        });
    }
    function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

//********************Lookup Table**********************

function lookupTable() {
    $(document).ready(function () {
        // Remove all empty h2.searchResults on page load
        $('.searchResults').each(function () {
            if (!$(this).text().trim()) {
                $(this).remove();
            }
        });

        $('.searchInput').on('input', function () {
            var blockId = $(this).attr('id');
            var searchText = $(this).val().toLowerCase();
            var pattern = /^[A-Za-z0-9\s]*$/; // Allow letters, numbers, spaces
            var table = $('#allsearch-table' + blockId);
            var rows = table.find('tr').slice(1); // Skip header
            var resultHeadingId = 'searchResults' + blockId;
            var resultHeading = $('#' + resultHeadingId);

            // Remove special characters
            if (!pattern.test(searchText)) {
                searchText = searchText.replace(/[^a-zA-Z0-9\s]/g, '');
                $(this).val(searchText);
                return;
            }

            var count = 0;

            // Search all td and th
            rows.each(function () {
                var row = $(this);
                var found = false;

                row.find('td, th').each(function () {
                    var cellText = $(this).text().toLowerCase();
                    if (cellText.includes(searchText)) {
                        found = true;
                        return false; // Exit loop
                    }
                });

                if (found) {
                    row.show();
                    count++;
                } else {
                    row.hide();
                }
            });

            // Clear input: show all and remove heading
            if (searchText.length === 0) {
                table.show();
                $('#' + resultHeadingId).remove(); // Remove h2 completely
                $('#LookUpTableTitle' + blockId).show();
            }
            // No matches found
            else if (count === 0) {
                table.hide();

                // Create h2 if it doesn't exist
                if (!resultHeading.length) {
                    $(this).parent().append(`<h2 class="h3 searchResults" id="${resultHeadingId}" aria-live="polite"></h2>`);
                    resultHeading = $('#' + resultHeadingId);
                }

                resultHeading.text($("#hiddenNotFoundTextValue" + blockId).val()).show();
                $('#LookUpTableTitle' + blockId).hide();
            }
            // Matches found
            else {
                table.show();

                if (!resultHeading.length) {
                    $(this).parent().append(`<h2 class="h3 searchResults" id="${resultHeadingId}" aria-live="polite"></h2>`);
                    resultHeading = $('#' + resultHeadingId);
                }

                resultHeading.text(count + " " + $("#hiddenFoundTextValue" + blockId).val()).show();
                $('#LookUpTableTitle' + blockId).show();
            }
        });
    });
}


//********************Back to top**********************

$(document).ready(function () {
    var scrollTrigger = 4 * $(window).height(); // Calculate the scroll trigger based on four screen lengths

    $(window).scroll(function () {
        if ($(this).scrollTop() > scrollTrigger) {
            $('.back-to-top').addClass('show');
        } else {
            $('.back-to-top').removeClass('show');
        }
    });

    $('.back-to-top').click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
});

//********************Video Player**********************
function videoPlayer() {
    $("#video-player .nav .nav-link").click(function () {
        if ($(".blue-bg div[id^='video']:not('.active')").length > 0) {
            $(".blue-bg div[id^='video']:not('.active')").each(function () {
                if ($(this).find("iframe").length > 0) {
                    var x = $(this).find("iframe").attr("src");
                    if (x.indexOf("youtube") != -1) {
                        var y = "?autoplay=0&mute=0";
                        $(this).find("iframe").attr("src", x + y);
                    }

                    if (x.indexOf("vimeo") != -1) {
                        var iframe = $(this).find("#vimeo-player")[0];
                        var player = $f(iframe);
                        player.api("pause");
                    }
                }
                if ($(this).find("video").length > 0) {
                    $(this).find("video")[0].pause();
                }
            });
        }
    });
}

$(function () {
    $(window).on('load', function () {
        $('[data-src]').each(function () {
            var $this = $(this),
                src = $(this).data('src');
            $this.attr('src', src);
        });
    });
});

//********************Counter Number**********************
function counterNumber() {
    $('.counter').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-target');
        $({
            countNum: $this.text()
        }).animate({
            countNum: countTo
        },
            {
                duration: 5000,
                easing: 'linear',
                step: function () {
                    $this.text(commaSeparateNumber(Math.floor(this.countNum)));
                },
                complete: function () {
                    $this.text(commaSeparateNumber(this.countNum));
                }
            }
        );
    });
}
function commaSeparateNumber(val) {
    val = val.toString().replace(/,/g, '');
    var valSplit = val.split('.');
    while (/(\d+)(\d{3})/.test(valSplit[0].toString())) {
        valSplit[0] = valSplit[0].toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
    }
    if (valSplit.length == 2) {
        val = valSplit[0] + "." + valSplit[1];
    } else {
        val = valSplit[0];
    }
    return val;
}

$(document).ready(function () {
    $('.breadcrumb li').each(function () {
        var content = $(this).text();
        var maxLength = 10;
        if (content.length > maxLength) {
            $(this).addClass('ellipsis');
        }
    });

    $('.news-tag').each(function () {
        var content = $(this).text();
        var maxLength = 5;
        if (content.length > maxLength) {
            $(this).addClass('ellipsis');
        }
    });
});


//********************Toast Block**********************

$(document).ready(function () {
    if (document.cookie.indexOf("ToastPopupBlocked") < 0) {
        $("#exampleModal").show();
        $(".modal-backbg").show();
        $("#exampleModal").addClass("show");
    }
    else {
        $("#exampleModal").hide();
        $(".modal-backbg").hide();
    }
});

function getCookie(name) {
    let cookie = {};
    document.cookie.split(';').forEach(function (el) {
        let [k, v] = el.split('=');
        cookie[k.trim()] = v;
    })
    return cookie[name];
}

$("#AllowToastPopup").click(function () {
    document.cookie = "ToastPopupBlocked=false; path=/; expires=Wed, 05 Aug 2028 23:00:00 UTC";
    $("#exampleModal").hide();
    $(".modal-backbg").hide();
});

$("#BlockToastPopup").click(function () {
    document.cookie = "ToastPopupBlocked=true; path=/; expires=Wed, 05 Aug 2028 23:00:00 UTC";
    $("#exampleModal").hide();
    $(".modal-backbg").hide();
});

$("#CloseToast").click(function () {
    $("#exampleModal").hide();
    $(".modal-backbg").hide();
});

//********************Site Wide Alert**********************

$(document).ready(function () {
    var cookieExpirationDays = getCookieExpirationFromSettings();
    var autoCloseTimeout = getAutoCloseTimeoutFromSettings();

    if (getCookie("SiteWideAlertBanner")) {
        $("#" + "SiteWideAlertBanner").hide();
        return;
    }

    if ((cookieExpirationDays <= 0 || !cookieExpirationDays) && (autoCloseTimeout <= 0 || !autoCloseTimeout)) {
        $("#" + "SiteWideAlertBanner").hide();
        return;
    }

    var accumulatedTime = localStorage.getItem('accumulatedTime') || 0;
    accumulatedTime = parseInt(accumulatedTime, 10);

    if (cookieExpirationDays <= 0 || !cookieExpirationDays) {
        if (autoCloseTimeout > 0) {
            $("#" + "SiteWideAlertBanner").show();

            var timer = setInterval(function () {
                accumulatedTime += 1;  
                localStorage.setItem('accumulatedTime', accumulatedTime); 

                if (accumulatedTime >= autoCloseTimeout) {
                    createSessionCookie("SiteWideAlertBanner");
                    $("#" + "SiteWideAlertBanner").hide();
                    clearInterval(timer); // Stop the timer

                    localStorage.removeItem('accumulatedTime');
                }
            }, 1000);  
        }
        return;
    }

    if (cookieExpirationDays > 0 && autoCloseTimeout > 0) {
        $("#" + "SiteWideAlertBanner").show();
        var timer = setInterval(function () {
            accumulatedTime += 1;  
            localStorage.setItem('accumulatedTime', accumulatedTime);  

            if (accumulatedTime >= autoCloseTimeout) {
                createSessionCookie("SiteWideAlertBanner");
                $("#" + "SiteWideAlertBanner").hide();
                clearInterval(timer); 

                localStorage.removeItem('accumulatedTime');
            }
        }, 1000);  
    }

    $("#alert-close").click(function () {
        createCookie(cookieExpirationDays, "SiteWideAlertBanner"); 
        $("#" + "SiteWideAlertBanner").hide();
        localStorage.removeItem('accumulatedTime');  
    });
});

function getCookieExpirationFromSettings() {
    var value = parseInt($("#cookieExpirationDays").val(), 10);
    return value > 0 ? value : 0;
}

function getAutoCloseTimeoutFromSettings() {
    return parseInt($("#autoCloseTimeout").val(), 10) || 0;
}

function createSessionCookie(cookieName) {
    document.cookie = cookieName + "=true; path=/;";
}

function createCookie(days, cookieName) {
    if (days > 0) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = cookieName + "=true; path=/; expires=" + date.toUTCString();
    }
}

function getCookie(cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) === 0) {
            return true;
        }
    }
    return false;
}


// Step Navigation Block
$(".show-hide-text").click(function () {
    var toggleIcon = $(".toggle-icon");
    toggleIcon.toggleClass("fa-angle-down fa-angle-up");

    if (toggleIcon.hasClass("fa-angle-down")) {
        $(".toggle-text").text($('#showAllText').val());
        $('.step-accordion .collapse').each(function () {
            $(this).removeClass('show');
        });
        $('.step-accordion .accordion-button').each(function () {
            $(this).attr('aria-expanded', 'false');
            $(this).addClass('collapsed');
        });
    }
    else {
        $(".toggle-text").text($('#hideAllText').val());
        $('.step-accordion .collapse').each(function () {
            $(this).addClass('show');
        });
        $('.step-accordion .accordion-button').each(function () {
            $(this).attr('aria-expanded', 'true');
            $(this).removeClass('collapsed');
        });
    }
});

$('.show-hide-text').keyup(function (event) {
    var id = event.keyCode;
    if (id == 13) {
        $('.toggle-text').trigger('click');
    }
});


$(document).ready(function () {
    if ($("#CTAShowInRightId").val()) {
        $("#CTABlockId").addClass('ms-auto');

    }
    else {
        $("#CTABlockId").removeClass('ms-auto');
    }
});

//********************Decision tree**********************

$(".tree-question").click(function () {
    var elementId = $(this).attr('id');
    var strItems = elementId.split("-");
    var ansItem = "answer-" + strItems[1];

    $('.tree-answer').hide();

    var isNested = $(this).parent().attr('class');
    if (isNested.indexOf('nested') > -1) {
        $('.tree-answer-section').hide();
        for (var i = strItems[1].length; i > 1; i--) {
            var temp = strItems[1].substring(0, i - 1);
            $('#answer-' + temp).show();
        }
    }

    $('#' + ansItem).show();
    $('#' + ansItem + ' .form-check-input').prop('checked', false);
    return;
});

$(".tree-reset").click(function () {
    $('.tree-answer').hide();
    $('.tree-answer-section').hide();
    $('.form-check-input').prop('checked', false);
});

//********************Language Banner**********************

$(document).ready(function () {
    CheckCookie_Hide("LanguageBanner", "lang-banner");
});

function CheckCookie_Hide(cookieName, blockToHide) {
    if (document.cookie.indexOf(cookieName) > -1) {
        if (getCookie(cookieName) == Langbannerpath) {
            $("#" + blockToHide).hide();
            return;
        }
        else {
            $("#" + blockToHide).show();
        }
    }
    else {
        $("#" + blockToHide).show();
    }
}
var Langbannerpath = (window.location.pathname);
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function CreatePageCookie(days, cookieName, hideBlockId, path) {
    if (document.cookie.indexOf(cookieName) > -1) {
        $("#lang-banner").hide();
        $("#" + hideBlockId).hide();
        return;
    }
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = cookieName + "=" + path + "; expires=" + date.toUTCString();
    }
}
function LanguageBanner() {
    $("#lang-banner").hide();
    CreatePageCookie(30, "LanguageBanner", "lang-banner", Langbannerpath);
}

/* PostCode Checker Block */
$(document).ready(function () {
    if (localStorage['ScrollPositionX'] !== "null") {
        $(document).scrollTop(localStorage['ScrollPositionX']);
        localStorage['ScrollPositionX'] = "null";
        $(".back-drop-bg").hide();
        $(".loader").hide();
    }

    if ($("#ListAddressVal").val() != null && $("#ListAddressVal").val() != "") {
        $("#divChangeLocation").show();
        $("#PostCodeSubmit").hide();
        $("#postcode-form").hide();
    }
    else if ($("#divNoResultFoudPostCode").is(':visible')) {
        $("#PostCodeSubmit").hide();
        $("#postcode-form").hide();
    }
    else {
        $("#PostCodeSubmit").show();
        $("#postcode-form").show();
    }
    $(".info-card").each(function () {
        var closestRow = $(this).closest(".row");
        closestRow.addClass("extra-margin");
    });
    $(".info-card.news-center").each(function () {
        var closestRow = $(this).closest(".row");
        closestRow.addClass("news-center-spacing");
    });
});

var postcodeRegex = /^[a-z]{1,2}\d[a-z\d]?\s*\d[a-z]{2}$/i;
$("#PostCodeSubmit").click(function () {
    if ($("#PostCode").val() != "") {
        if (postcodeRegex.test($("#PostCode").val())) {
            $(".back-drop-bg").show();
            $(".loader").show();
            $("#postcode-form").removeClass("form-error");
            $("#divChangeLocation").show();
            localStorage["ScrollPositionX"] = $(this).parents('section:first').offset().top;
            $("#divInvalidPostCodeMessage").hide();
            $("#PostCodeSubmit").hide();
            $("#postcode-form").hide();
            if ($("#ListAddressVal").val() != null && $("#ListAddressVal").val() != "") {
                $('#SelectAddressDrpDn').show();
            }
        }
        else {
            $("#divInvalidPostCodeMessage").show();
            $("#postcode-form").addClass("form-error");
            $("#divInvalidPostCodeMessage").text($("#hdnInvalidPostCodeMessage").val());
            return false;
        }
    }
});

$("#ChangeLocation").click(function () {
    $("#PostCodeSubmit").show();
    $("#postcode-form").show();
    $("#divChangeLocation").hide();
    $("#PostCodeLabel").text('');
    $('#SelectAddressDrpDn').empty();
    $('#SelectAddressDrpDn').hide();
    $("#divInitialContent").hide();
    $("#PostCodeTableResult").hide();
    $("#divClosingContent").hide();
    $("#divNoResultFoudPostCode").hide();
    var uri = window.location.href.toString();
    if (uri.indexOf("?") > 0) {
        var clean_uri = uri.substring(0, uri.indexOf("?"));
        window.history.replaceState({}, document.title, clean_uri);
    }
});

$("#SelectAddressDrpDn").change(function () {
    var selectUrn = $('#SelectAddressDrpDn :selected').val();
    var ListAddressVal = JSON.parse($("#ListAddressVal").val());
    if (selectUrn == "0") {
        $("#divInitialContent").hide();
        $("#PostCodeTableResult").hide();
        $("#divClosingContent").hide();
    }

    $(ListAddressVal).each(function (r, k) {
        if (selectUrn == ListAddressVal[r].UPRN) {
            $("#divInitialContent").show();
            $("#PostCodeTableResult").show();
            $("#divClosingContent").show();
            SetPostCodeTableValues(ListAddressVal[r]);
            return;
        }
    });

});

function SetPostCodeTableValues(ListAddressVal) {
    let netSpeedUnit = $("#hdnInternetSpeedUnit").val();
    $("#StandardDownloadVal").text(ListAddressVal.MaxBbPredictedDown > -1 ? ListAddressVal.MaxBbPredictedDown + " " + netSpeedUnit : '- -');
    $("#StandardUploadVal").text(ListAddressVal.MaxBbPredictedUp > -1 ? ListAddressVal.MaxBbPredictedUp + " " + netSpeedUnit : '- -');
    SetValuesForAvailability(ListAddressVal.MaxBbPredictedUp, ListAddressVal.MaxBbPredictedDown, "StandardAvailableVal");
    $("#SuperfastDownloadVal").text(ListAddressVal.MaxSfbbPredictedDown > -1 ? ListAddressVal.MaxSfbbPredictedDown + " " + netSpeedUnit : '- -');
    $("#SuperfastUploadVal").text(ListAddressVal.MaxSfbbPredictedUp > -1 ? ListAddressVal.MaxSfbbPredictedUp + " " + netSpeedUnit : '- -');
    SetValuesForAvailability(ListAddressVal.MaxSfbbPredictedUp, ListAddressVal.MaxSfbbPredictedDown, "SuperfastAvailableVal");
    console.log(ListAddressVal.MaxUfbbPredictedDown)
    $("#UltrafastDownloadVal").text(ListAddressVal.MaxUfbbPredictedDown > -1 ? ListAddressVal.MaxUfbbPredictedDown + " " + netSpeedUnit : '- -');
    $("#UltrafastUploadVal").text(ListAddressVal.MaxUfbbPredictedUp > -1 ? ListAddressVal.MaxUfbbPredictedUp + " " + netSpeedUnit : '- -');
    SetValuesForAvailability(ListAddressVal.MaxUfbbPredictedUp, ListAddressVal.MaxUfbbPredictedDown, "UltrafastAvailableVal");
}

function SetValuesForAvailability(upload, download, id) {
    if (parseFloat(upload) > -1 || parseFloat(download) > -1) {
        $("#" + id).text($("#hdnAvailableText").val());
    }
    else {
        $("#" + id).text($("#hdnUnAvailableText").val());
    }
}

/* End Of Post Code Checker */

// EXTERNAL LINK IN NEW TAB
$(document).ready(function () {
    $(document.links).not(".rich-text-block a").each(function (r, k) {
        if (k.host !== location.host && k.href.indexOf('javascript:void(0)') < 0) {
            k.target = '_blank';
        }
    });
});


//********************Page Specific Info Banner**********************

$(document).ready(function () {
    CheckCookieAndHidePopup("PageSpecCookie", "page-banner");
});

function CheckCookieAndHidePopup(cookieName, blockToHide) {
    if (document.cookie.indexOf(cookieName) > -1) {
        if (getCookie(cookieName) == pagebannerpath) {
            $("#" + blockToHide).hide();
            return;
        }
        else {
            $("#" + blockToHide).show();
        }
    }
    else {
        $("#" + blockToHide).show();
    }
}
var pagebannerpath = (window.location.pathname);
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function createPageCookie(days, cookieName, hideBlockId, path) {
    if (document.cookie.indexOf(cookieName) > -1) {
        $("#page-banner").hide();
        $("#" + hideBlockId).hide();
        return;
    }
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = cookieName + "=" + path + "; expires=" + date.toUTCString();
    }
}

function pageInfo() {
    $("#page-banner").hide();
    createPageCookie(30, "PageSpecCookie", "page-banner", pagebannerpath);
}
function pageInfoBanner() {
    $("#page-banner").hide();
}

$(document).ready(function () {
    $('blockquote p:has(cite)').contents().unwrap();
});

$(document).ready(function () {

    //1=Refresh,2=backurl,0=firsttimeload
    if (performance.navigation.type != 1) {
        var storedAccordions = JSON.parse(sessionStorage.getItem('openAccordions')) || [];
        storedAccordions.forEach(function (item) {
            $('#' + item).addClass('show');
            $('#' + item).prev('.accordion-header').find('.accordion-button').removeClass('collapsed');
        });
        $('.accordion').on('shown.bs.collapse', function (e) {
            var accordionId = $(e.target).attr('id');
            if ($.inArray(accordionId, storedAccordions) === -1) {
                storedAccordions.push(accordionId);
                sessionStorage.setItem('openAccordions', JSON.stringify(storedAccordions));
            }
        });
        $('.accordion').on('hidden.bs.collapse', function (e) {
            var accordionId = $(e.target).attr('id');
            storedAccordions = $.grep(storedAccordions, function (value) {
                return value !== accordionId;
            });
            sessionStorage.setItem('openAccordions', JSON.stringify(storedAccordions));
        });
    }
});

$(document).ready(function () {
    $(document).on('DOMNodeInserted', '#CookiebotSessionPixel', function () {
        $(this).attr('alt', 'CookiebotSessionImg');
    });
});

// For remove footer top margin
$(document).ready(function () {
    var lastBlock = $("main .block.latestnewsblock:last");
    var allBlocks = $("main .block");

    if (lastBlock.length > 0 && lastBlock.is(":last-child") && lastBlock.hasClass("block")) {
        $("#footer-subscription").removeClass("mtop-5");
    }
});

// To trim the end 'forward slash' in all media file hyperlinks
$(document).ready(function () {
    $("a").each(function () {
        var href = $(this).attr("href");
        if (href && href.length > 1 && (href.indexOf("/globalassets/") > 0 || href.indexOf("/siteassets/") > 0 || href.indexOf("/contentassets/") > 0) && href.endsWith('/')) {
            $(this).attr("href", href.slice(0, -1));
        }
    });
});
$(document).ready(function () {
    $('.recommendation-block-outer').each(function () {
        if ($(this).find('.search-box').length === 0) {
            $(this).addClass('without-search');
        }
    });
});

// Add aria-expanded on menu

$(document).ready(function(){
    function updateSubMenuShow() {
        $('li').each(function() {
            var anchor = $(this).find('button');
            var submenuDiv = $(this).find('div.sub-menu-show');

            if(submenuDiv.length) {
                anchor.attr('aria-expanded', 'true');
            } else {
                anchor.attr('aria-expanded', 'false');
            }
        });
    }
    updateSubMenuShow();
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                updateSubMenuShow();
            }
        });
    });
    observer.observe(document.documentElement, {
        attributes: true,
        subtree: true
    });
});

const dateInputs = document.querySelectorAll('input[type="date"]');
dateInputs.forEach(input => {
    input.addEventListener('input', function () {
        if (this.value !== '') {
            this.classList.add('has-value');
        } else {
            this.classList.remove('has-value');
        }
    });
});

$(document).ready(function () {
    var elementIds = ['#TopicDropdown', '#SubtopicDropdown', '#StatusDropdown', '#NewsTypeDropdown', '#ContentDropdown', '#dd_short_Type', 'dd_resultstodisplay'];

    var existingIds = elementIds.filter(function (id) {
        return $(id).length > 0; 
    });

    var vsElements = existingIds.map(function (id) {
        return VirtualSelect.init({
            ele: id,
        });
    });
    
    $(document).on('keydown', function (event) {
        if (event.keyCode === 9) { 
            existingIds.forEach(function (id, index) {
                var $selectElement = $(id);
                if ($(document.activeElement)[0] !== $selectElement[0]) {
                    if (vsElements[index] && vsElements[index].$ele) {
                        vsElements[index].$ele.close();  // Close the dropdown if it's open and focus has moved away
                    }
                }
            });
        }
    });
});

$(document).ready(function () {
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if ($("#g-recaptcha-response-100000").length > 0 && $("label[for='g-recaptcha-response-100000']").length === 0) {
                $("<label for='g-recaptcha-response-100000' class='visually-hidden-focusable'>reCaptcha</label>").insertBefore("#g-recaptcha-response-100000");
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
});

$(document).ready(function() {
    var currentDomain = window.location.hostname;
    $('.rich-text-block a').each(function() {
        var href = $(this).attr('href');
        // Check if href is valid and not the same as the current domain
        if (href && (href.startsWith('http://') || href.startsWith('https://')) && !href.includes(currentDomain)) {
            $(this).addClass('external-link');
        }
    });
});

$(document).ready(function () {
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Tab') {
            $('.menu > ul > li > button, .search-icons').on('focus', function () {
                if ($(this).is(':focus-visible')) {
                    $('.sub-menu-show').removeClass('sub-menu-show');
                    $(".menu-item-has-children .fa-angle-down").removeClass("rotate-arrow");
                }
            });
        }
    });
});  

// Search Filter
function stickyFilterTop() {
  let lastScrollTop = 0;
  let lastTimestamp = Date.now();
  let accordion = $("#accordionContainer");
  let accordionWrapper = $("#accordionWrapper");

  // ✅ Automatically add id="add-padding-top" to the next sibling of .results-top
  if ($(".results-top").length > 0) {
    let nextElem = $(".results-top").next();
    if (nextElem.length > 0 && !nextElem.attr("id")) {
      nextElem.attr("id", "add-padding-top");
    }
  }

  let originalOffset = accordionWrapper.offset().top;
  let addPaddingTarget = $("#add-padding-top");

  // Create hidden live region for screen readers
  let ariaLive = $("#aria-live");
  if (ariaLive.length === 0) {
    $("body").append('<div id="aria-live" class="sr-only" aria-live="polite"></div>');
    ariaLive = $("#aria-live");
  }

  // Function to announce messages for accessibility
  function announceForScreenReader(message) {
    ariaLive.text(message);
  }

  function isAnyAccordionOpen() {
    return $(".accordion-collapse.show").length > 0;
  }

  function updateStickyFullscreen() {
    if (accordion.hasClass("sticky") && isAnyAccordionOpen()) {
      accordion.css("height", "auto");
      $("body").css("overflow-y", "auto");
    } else {
      accordion.css("height", "auto");
      $("body").css("overflow-y", "auto");
    }
  }

  $(window).on("scroll", function () {
    let currentScroll = $(this).scrollTop();
    let currentTimestamp = Date.now();

    // Calculate scroll speed in px/sec
    let distance = Math.abs(currentScroll - lastScrollTop);
    let timeDiff = currentTimestamp - lastTimestamp;
    let speed = distance / (timeDiff || 1); // px per ms

    // Map speed to animation duration
    let minDuration = 100;  // Fastest
    let maxDuration = 500;  // Slowest
    let duration = Math.max(minDuration, maxDuration - speed * 3);
    duration = Math.min(duration, maxDuration);

    // Apply smooth transition
    accordion.css("transition", `all ${duration}ms ease`);

    if (currentScroll > lastScrollTop) {
      // Scrolling down
      if (currentScroll >= originalOffset) {
        if (!accordion.hasClass("sticky")) {
          accordion.addClass("sticky");
          addPaddingTarget.css("padding-top", "100px");

          $(".accordion-collapse").collapse("hide"); // Collapse all
          announceForScreenReader("Filter collapsed"); // Accessibility
          updateStickyFullscreen();
        }
      }
    } else {
      // Scrolling up
      if (currentScroll < originalOffset) {
        if (accordion.hasClass("sticky")) {
          accordion.removeClass("sticky");
          addPaddingTarget.css("padding-top", "0px");

          $(".accordion-collapse").collapse("show");
          announceForScreenReader("Filter expanded"); // Accessibility
          accordion.css("height", "auto");
          $("body").css("overflow-y", "auto");
        }
      }
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    lastTimestamp = currentTimestamp;
  });

  // Update fullscreen status and announce on manual accordion toggle
  $(".accordion-button").on("click", function () {
    setTimeout(function () {
      if (isAnyAccordionOpen()) {
        announceForScreenReader("Filter expanded"); // Accessibility
      } else {
        announceForScreenReader("Filter collapsed"); // Accessibility
      }
      updateStickyFullscreen();
    }, 300);
  });
}

$(document).ready(function () {
  stickyFilterTop();
});

// Teaser Swiper
function initializeSwiper() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 10,
                slidesPerGroup: 2,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 10,
                slidesPerGroup: 3,
            },
        },
    });
    window.addEventListener('resize', function () {
        swiper.update();
    });
}

initializeSwiper();