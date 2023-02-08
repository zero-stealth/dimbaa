<script>
import html2pdf from "html2pdf.js";
export default {
    methods: {
        generatePdf() {
            html2pdf(document.getElementById("pdf-area"), {
                margin: 1,
                filename: "referee_assesor.pdf",
            });
        },
    },
};
</script>
<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const premier = ref("NBC PREMIER League 2023/24")
const roleTitle = ref("Ref Assessor Report");
const data = ref([]);
console.log(data.value)

onMounted(async () => {
    const options = {
        method: "GET",
        url: "https://be-tblp.dimbaa.com/api/data-manager/list-match-events",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization:
                "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiNWZhMGRiODY3YTM0NTg3MTg2ZDk3MDdiMDBmYzliYWM4M2QyZjAzOWM2ZjhjZjVlMTRlMWUwY2UxZGYxYmRhNDdiYWYxNWEyMjJhMDhkMmIiLCJpYXQiOjE2NzExOTM1MzguNTU0MTM0LCJuYmYiOjE2NzExOTM1MzguNTU0MTM2LCJleHAiOjE2ODY5MTgzMzguNTQ4NTAxLCJzdWIiOiI3Iiwic2NvcGVzIjpbXX0.kYBwzo9ZoKTL9GG_j9iMpswww1UriiHYPufljSVJo_5QyLiJrI4Wb2k0sPD7iDb0SmlrFQnUdSI8knqLUZBe2Sd2bC4r4c_otOdYLnQAyxmM-0fJh_jVIGYgCjFF7msWOWsTcyl8fg7-Uj3yrsAxoxOdQW-L28dx4-hFAZUR9eOs2XCwU0cf9TUnGdqxvUm_wFBBou509NtZec1bmaAgUbG9GSpAfk7mfmuUOU1u7ElrOTFyvvN4bAI_70DpK3XUDJ0Nw81YsCO0_kp_Nr1hAZ2fmcIPXe-xKvwSPfp_7cMmT6HqV9MdQwPK7-ISoJq_eTy2fGvfHDQrWyKLDyKp8W0Fs5z6PURwT2hFZ6tV3jxCMH-sAzgTY72xXdb3EjG4etbbyc-wAWXmPQ9WB5SeOms2Xqm4M41XQbNeyK-qy2jYcDQLnYVnRZihWdBTLcBf64_DFuMWzRhvu4hTL8_fVu94whAWW-Oi9-s7BKRftDf3paExjJtEaT6-kUDnzRpe_Yfw9nfWDxA8LYUUsukYDDqvSshVRk5eG6kp3K169pppD7gAKakpORggebMgEHn4DGX7ieowJk3XCfDrIxZ5EVoX3HGZjamaRPmnl-bX2lvBTjBm3uFSGrLnMbckzS4fdpYK3YnNmyBESm9-sOCQ-5M3Nf6jsFQH6FdeWnGoo0E",
        },
    };

    axios
        .request(options)
        .then(function (response) {
            data.value = response.data.match;
            console.log(data.value);
        })
        .catch(function (error) {
            console.error(error);
        });
});
</script>
<template>
    <div ref="document" class="pdf-wrapper">
        <div class="pdf-container" id="pdf-area">
            <div class="pdf-header">
                <img src="@/assets/nbc.png" alt="nbc-logo" class="nbc-logo" />
                <div class="pdf-header-info">
                    <div class="inner-header assessor-header">
                        <h1>{{ premier }}</h1>
                        <h2>{{ roleTitle }}</h2>
                    </div>
                    <img src="@/assets/tplb.png" alt="tplb-logo" class="tplb-pdf" />
                </div>
                <img src="@/assets/tff-logo.png" alt="tff-logo" class="tff-pdf" />
            </div>
            <div class="pdf-details">
                <div class="inner-pdf-details">
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="pdf-title assessor-title"><span>About the Match</span> </div>
                        <div class="table-pdf-header">
                            <div>Parameter</div>
                            <div>Detail</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="pdf-title assessor-title"><span>Refereeing Team</span> </div>
                        <div class="table-pdf-header">
                            <div>Dakika</div>
                            <div>Name</div>
                            <div>Region</div>
                            <div>Degree of difficulty</div>
                            <div>Marks</div>
                            <div>Marks*</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <h5 class="assessor-header-i">Evaluation Of The Referee</h5>
                    <div class="pdf-tbl-d">
                        <div class="pdf-title assessor-title"><span>Control of the Game</span> </div>
                        <div class="table-pdf-header">
                            <div>Performance</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Positive Points</div>
                            <div>Minutes</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Area Of Improvement</div>
                            <div>Minutes</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Additional Comments on control of the Game</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="pdf-title assessor-title"><span>Physical fitness & Positioning</span> </div>
                        <div class="table-pdf-header">
                            <div>Performance</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Positive Points</div>
                            <div>Minutes</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Area Of Improvement</div>
                            <div>Minutes</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Additional Comments on control of the Game</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="pdf-title assessor-title"><span>Team Work</span> </div>
                        <div class="table-pdf-header">
                            <div>Performance</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Positive Points</div>
                            <div>Minutes</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Area Of Improvement</div>
                            <div>Minutes</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Additional Comments on control of the Game</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                       <h5 class="assessor-header-i">Evaluation Of The Referee 1</h5>
                    <div class="pdf-tbl-d">
                        <div class="pdf-title assessor-title"><span>Key Point</span> </div>
                        <div class="table-pdf-header">
                            <div>Performance</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Positive Points</div>
                            <div>Minutes</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Area Of Improvement</div>
                            <div>Minutes</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Additional Comments on control of the Game</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                       <h5 class="assessor-header-i">Evaluation Of The Referee 2</h5>
                    <div class="pdf-tbl-d">
                        <div class="pdf-title assessor-title"><span>Key Point</span> </div>
                        <div class="table-pdf-header">
                            <div>Performance</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Positive Points</div>
                            <div>Minutes</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Area Of Improvement</div>
                            <div>Minutes</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Additional Comments on control of the Game</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <h5 class="assessor-header-i">Evaluation Of the 4th Official</h5>
                    <div class="pdf-tbl-d">
                        <div class="pdf-title assessor-title"><span>Key Point</span> </div>
                        <div class="table-pdf-header">
                            <div>Performance</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Positive Points</div>
                            <div>Minutes</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Area Of Improvement</div>
                            <div>Minutes</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Additional Comments on control of the Game</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="pdf-title assessor-title"><span>Additional Reamark</span> </div>
                        <div class="table-pdf-header">
                            <div>Additional Assistant Referee 1</div>
                            <div>Marks</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Additional Assistant Referee 2</div>
                            <div>Marks</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                             <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Date</div>
                            <div>Sign</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                </div>
            </div>
            <div class="pdf-footer assessor-header">
                <h1 class="">TANZANIA PREMIER LEAGUE BOARD (TPLB)</h1>
                <h5>P.O.Box 79043 Dar es Salaam.</h5>
                <h5>Email: taarifa@ligikuu.co.tz, info@ligikuu.co.tz
                </h5>
                <h5>14thFloor, NSSF Mafao House Plot NO. 40, Block Y, Uhuru Street Ilala, Dar es Salaam</h5>
            </div>
        </div>
        <div class="pdf-btn">
            <button class="btn1 btn1-b" @click="generatePdf">Download</button>
        </div>
    </div>
</template>
<style>
@import "@/style/pdf.css";
</style>