import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountryModule } from './country/country.module';
import { MongooseModule } from '@nestjs/mongoose';
import { StateModule } from './state/state.module';
import { ConfigModule } from '@nestjs/config';
import { BonusModule } from './bonus/bonus.module';
import { UserModule } from './user/user.module';
import { UserRoleModule } from './user_role/user_role.module';
import { CurriculumModule } from './curriculum/curriculum.module';
import { TutorScoringCriteriaModule } from './tutor_scoring_criteria/tutor_scoring_criteria.module';
import { GamificationRewardModule } from './gamification_reward/gamification_reward.module';
import { CurrencyModule } from './currency/currency.module';
import { TemplateModule } from './template/template.module';
import { PenaltyTypeModule } from './penalty_type/penalty_type.module';
import { RegionModule } from './region/region.module';
import { ContractModule } from './contract/contract.module';
import { DistrictModule } from './district/district.module';
import { PerformanceMetricModule } from './performance_metric/performance_metric.module';
import { SubjectModule } from './subject/subject.module';
import { TutorModule } from './tutor/tutor.module';
import { ExerciseModule } from './exercise/exercise.module';
import { TopicModule } from './topic/topic.module';
import { StandardModule } from './standard/standard.module';
import { StudentLanguageModule } from './student_language/student_language.module';
import { SchoolModule } from './school/school.module';
import { CurriculumExerciseModule } from './curriculum_exercise/curriculum_exercise.module';
import { GroupModule } from './group/group.module';
import { StudentModule } from './student/student.module';
import { ContactModule } from './contact/contact.module';
import { NotificationModule } from './notification/notification.module';
import { AccountModule } from './account/account.module';
import { LanguageModule } from './language/language.module';
import { GradeModule } from './grade/grade.module';
import { UserRoleAssignmentModule } from './user_role_assignment/user_role_assignment.module';
import { LearningGoalModule } from './learning_goal/learning_goal.module';
import { TutorPaymentMethodModule } from './tutor_payment_method/tutor_payment_method.module';
import { TutorBonusModule } from './tutor_bonus/tutor_bonus.module';
import { AuthModule } from './auth/auth.module';
import { TutorAttendanceModule } from './tutor_attendance/tutor_attendance.module';

import { TutorAssigmentHistoryModule } from './tutor_assigment_history/tutor_assigment_history.module';
import { UpModule } from './up/up.module';
import { HealthModule } from './health/health.module';
import { ParentModule } from './parent/parent.module';
import { ProgramModule } from './program/program.module';
import { SystemSettingModule } from './system_setting/system_setting.module';
import { ClassQualityModule } from './class_quality/class_quality.module';
import { AuditLogModule } from './audit_log/audit_log.module';
import { TutorPenaltyModule } from './tutor_penalty/tutor_penalty.module';
import { ProgramContractModule } from './program_contract/program_contract.module';
import { TutorEducationModule } from './tutor_education/tutor_education.module';

import { TutorProfileModule } from './tutor_profile/tutor_profile.module';
import { TutorStudentHistoryModule } from './tutor_student_history/tutor_student_history.module';
import { BuyerModule } from './buyer/buyer.module';
import { TutorAvailabilityModule } from './tutor_availability/tutor_availability.module';
import { DiagnosticTestModule } from './diagnostic_test/diagnostic_test.module';
import { TutorAssignmentModule } from './tutor_assignment/tutor_assignment.module';
import { AccountContractModule } from './account_contract/account_contract.module';
import { AccountSchoolModule } from './account_school/account_school.module';
import { PlannedSessionModule } from './planned_session/planned_session.module';
import { StudentKnowledgeLevelModule } from './student_knowledge_level/student_knowledge_level.module';

import { SessionTemplateModule } from './session_template/session_template.module';
import { StudentParentModule } from './student_parent/student_parent.module';
import { PersonalityTestModule } from './personality_test/personality_test.module';
import { BuyerReportTypeModule } from './buyer_report_type/buyer_report_type.module';
import { SessionModule } from './session/session.module';

import { TutorExperienceModule } from './tutor_experience/tutor_experience.module';
import { TutorPreferenceModule } from './tutor_preference/tutor_preference.module';

import { TutorGroupRelationModule } from './tutor_group_relation/tutor_group_relation.module';
import { RubricModule } from './rubric/rubric.module';
import { StudentAttendanceModule } from './student_attendance/student_attendance.module';
import { EntityPerformanceModule } from './entity_performance/entity_performance.module';
import { DiagnosticTestExerciseModule } from './diagnostic_test_exercise/diagnostic_test_exercise.module';
import { ScheduleModule } from './schedule/schedule.module';
import { StudentGroupModule } from './student_group/student_group.module';
import { SurveyModule } from './survey/survey.module';
import { TicketModule } from './ticket/ticket.module';
import { TutorLanguageModule } from './tutor_language/tutor_language.module';
import { TutorScoreModule } from './tutor_score/tutor_score.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL),
    UpModule,
    HealthModule,
    AuthModule,
    AccountModule,
    AccountContractModule,
    AccountSchoolModule,
    AuditLogModule,
    BonusModule,
    BuyerModule,
    BuyerReportTypeModule,
    ClassQualityModule,
    ContactModule,
    ContractModule,
    CountryModule,
    CurrencyModule,
    CurriculumModule,
    CurriculumExerciseModule,
    DiagnosticTestModule,
    DiagnosticTestExerciseModule,
    DistrictModule,
    EntityPerformanceModule,
    ExerciseModule,
    GamificationRewardModule,
    GradeModule,
    GroupModule,
    LanguageModule,
    LearningGoalModule,
    NotificationModule,
    ParentModule,
    PenaltyTypeModule,
    PerformanceMetricModule,
    PersonalityTestModule,
    PlannedSessionModule,
    ProgramModule,
    ProgramContractModule,
    RegionModule,
    RubricModule,
    ScheduleModule,
    SchoolModule,
    SessionModule,
    SessionTemplateModule,
    StandardModule,
    StateModule,
    StudentModule,
    StudentAttendanceModule,
    StudentGroupModule,
    StudentKnowledgeLevelModule,
    StudentLanguageModule,
    StudentParentModule,
    SubjectModule,
    SurveyModule,
    SystemSettingModule,
    TemplateModule,
    TicketModule,
    TopicModule,
    TutorModule,
    TutorAssignmentModule,
    TutorAssigmentHistoryModule,
    TutorAttendanceModule,
    TutorAvailabilityModule,
    TutorBonusModule,
    TutorEducationModule,
    TutorExperienceModule,
    TutorGroupRelationModule,
    TutorLanguageModule,
    TutorPaymentMethodModule,
    TutorPenaltyModule,
    TutorPreferenceModule,
    TutorProfileModule,
    TutorScoreModule,
    TutorScoringCriteriaModule,
    TutorStudentHistoryModule,
    UserModule,
    UserRoleModule,
    UserRoleAssignmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
