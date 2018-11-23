<template>
  <div id="payslip-from-company">
    <div class="back-link container">
      <a @click="$router.go(-1);" href="javascript:void(0);">Back</a>
    </div>
    <div class="container container-border">
      <div class="row justify-content-between align-items-center" id="header">
        <div class="col-auto">
          <img class="ddr-logo" src="@/assets/images/ddr-doc.png" />
        </div>
        <div class="col-auto doc-no">
          NO:&nbsp;<span class="underline"></span>
        </div>
      </div>

      <div class="content">
        <h1>Digital National ID</h1>
        <div class="row">
          <div class="col">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>Joe</td>
                  <th>Employee No</th>
                  <td>SD0122</td>
                </tr>
                <tr>
                  <th>Designation</th>
                  <td>Computer Science and Software Engineer</td>
                  <th>PF No.</th>
                  <td>KN/KM/2345/1209</td>
                </tr>
                <tr>
                  <th>Grade</th>
                  <td>A15</td>
                  <th>Bank Acc No</th>
                  <td>1024587584037</td>
                </tr>
                <tr>
                  <th>Department</th>
                  <td>E1B3</td>
                  <th>Date of Joining</th>
                  <td>06 Aug 2008</td>
                </tr>
                <tr>
                  <th>Working Days</th>
                  <td>30</td>
                  <th>Day Payable</th>
                  <td>30</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="row mt-3">
          <div class="col">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Earnings</th>
                  <th>Rs.</th>
                  <th>Deduction No</th>
                  <th>Rs</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>BASIC</td>
                  <td>23780</td>
                  <td>PF</td>
                  <td>3900</td>
                </tr>
                <tr>
                  <td>CONVEYANCE ALLOW</td>
                  <td>700</td>
                  <td>PROFESSIONAL TAX</td>
                  <td>200</td>
                </tr>
                <tr>
                  <td>PERS PAY ALLOWANCE</td>
                  <td>26576</td>
                  <td>INCOME TAX</td>
                  <td>6521</td>
                </tr>
                <tr>
                  <td>ADVANCE BONUS/EXGRATIA</td>
                  <td>600</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th>Total Earnings:</th>
                  <th>312312</th>
                  <th>Total Deduction</th>
                  <th>93779</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <div class="row">
          <div class="col note ">
            Net Pay: RS.61494 (Rupees Sixty One Thousand Ninety Three)
          </div>
        </div>
        <div class="row signature justify-content-between">
          <div class="col-6 stamp">
            <img
              class="embed-responsive stamp-image"
              src="@/assets/images/stamp.png"
              alt="stamp"
            />
          </div>
          <div class="col-6 text-right">
            <p>Department of Residence Registration</p>
            <p>01st August 2018</p>
            <div class="signature-image text-right">
              <img
                class="embed-responsive"
                src="@/assets/images/signature.png"
                alt="signature"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/styles/digital-national-id-doc.scss";

export default {
  name: "PayslipFromCompany"
};
</script>

<style></style>
