<template>
  <div id="fill-information-for-payslip">
    <div class="back-link container">
      <a @click="$router.go(-1);" href="javascript:void(0);">Back</a>
    </div>
    <div class="container container-border">
      <h1 class="title">Fill your information</h1>
      <p class="description">
        Lorem ipsum dolor amet man bun schlitz subway tile, intelligentsia pabst
        pickled chambray asymmetrical. YOLO tumeric aesthetic drinking vinegar
        bitters trust fund pour-over sustainable glossier mustache.
      </p>

      <form class="" @submit.prevent="validateBeforeSubmit">
        <div class="row">
          <div class="col-6">
            <vs-input
              name="last-name"
              v-validate="'required'"
              label="Last Name"
              placeholder="Last Name"
              v-model="lastName"
              danger-text="The last name is required"
              :danger="errors.has('last-name')"
            />
          </div>
          <div class="offset-0 col-6">
            <vs-input
              name="first-name"
              v-validate="'required'"
              label="First Name"
              placeholder="First Name"
              v-model="firstName"
              danger-text="The wallet type is required"
              :danger="errors.has('first-name')"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <v-dialog
              ref="dialog1"
              v-model="modalOfDOB"
              :return-value.sync="dateOfBirth"
              persistent
              lazy
              full-width
              width="290px"
            >
              <vs-input
                slot="activator"
                name="date-of-birth"
                v-validate="'required'"
                label="Date Of Birth"
                placeholder="Date Of Birth"
                v-model="computedDateFormatted"
                danger-text="The date of birth is required"
                :danger="errors.has('date-of-birth')"
                icon-after="true"
                icon="calendar_today"
              />

              <v-date-picker
                v-model="dateOfBirth"
                scrollable
                header-color="#0C63B7"
              >
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="modalOfDOB = false;"
                  >Cancel</v-btn
                >
                <v-btn
                  flat
                  color="primary"
                  @click="$refs.dialog1.save(dateOfBirth);"
                  >OK</v-btn
                >
              </v-date-picker>
            </v-dialog>
          </div>
          <div class="col-8 offset-0">
            <vs-input
              name="place-of-birth"
              v-validate="'required'"
              label="Place of birth"
              placeholder="Place Of Birth"
              v-model="placeOfBirth"
              danger-text="The Place of Birth is required"
              :danger="errors.has('place-of-birth')"
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <vs-input
              type="number"
              name="id-number"
              v-validate="'required'"
              label="ID number"
              placeholder="ID Number"
              v-model="idNumber"
              danger-text="The Id Number is required"
              :danger="errors.has('id-number')"
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <vs-input
              name="address"
              label="Address"
              placeholder="Address"
              v-model="address"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <v-dialog
              ref="dialog2"
              v-model="modalOfStartWorkDate"
              :return-value.sync="startWorkDate"
              persistent
              lazy
              full-width
              width="290px"
            >
              <vs-input
                slot="activator"
                name="date-start-work"
                v-validate="'required'"
                label="Date Start Work"
                placeholder="Date Start Work"
                v-model="startWorkDate"
                danger-text="The date-start-work is required"
                :danger="errors.has('date-start-work')"
                icon-after="true"
                icon="calendar_today"
              />

              <v-date-picker
                v-model="startWorkDate"
                scrollable
                header-color="#0C63B7"
              >
                <v-spacer></v-spacer>
                <v-btn
                  flat
                  color="primary"
                  @click="modalOfStartWorkDate = false;"
                  >Cancel</v-btn
                >
                <v-btn
                  flat
                  color="primary"
                  @click="$refs.dialog2.save(startWorkDate);"
                  >OK</v-btn
                >
              </v-date-picker>
            </v-dialog>
          </div>
          <div class="col-4 offset-0">
            <vs-input
              name="staff-code"
              v-validate="'required'"
              label="Staff Code"
              placeholder="Staff Code"
              v-model="staffCode"
              danger-text="The Staff Code is required"
              :danger="errors.has('staff-code')"
            />
          </div>
        </div>

        <div class="row mt-5 mb-4">
          <input type="submit" class="send-request-btn" value="Send Request" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import "@/assets/styles/forms.scss";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
export default {
  name: "FillInformationForPayslip",
  components: {
    vueDropzone: vue2Dropzone
  },
  data: function() {
    return {
      lastName: "",
      firstName: "",
      walletKey: "",
      dateOfBirth: null,
      placeOfBirth: null,
      idNumber: null,
      address: "",
      startWorkDate: null,
      staffCode: null,
      dobFormatted: null,
      modalOfDOB: false,
      modalOfStartWorkDate: false,
      dropzoneOptions: {
        url:
          "http://janison2.southeastasia.cloudapp.azure.com:8000/predictbinary",
        maxFilesize: 500,
        createImageThumbnails: true,
        addRemoveLinks: false,
        headers: { "My-Awesome-Header": "header value" },
        dictDefaultMessage: `
          <div class="description"
            <p>You can drag and drop files here to add them.</p>
            <input type="button" class="inner-upload-btn" value="Upload your ID Card">
          </div>`
      }
    };
  },
  computed: {
    computedDateFormatted() {
      //this.dobFormatted = this.formatDate(this.dateOfBirth);
      return this.formatDate(this.dateOfBirth);
    }
  },
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          // isValid == true
          this.$router.push("user-send-request-successfully");
          return;
        }
      });
    },
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }
  }
};
</script>

<style></style>
