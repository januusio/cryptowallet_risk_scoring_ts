/* tslint:disable */
/* eslint-disable */
/**
 * Risk scoring API
 * This is an API that provides whitebox risk scoring
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Reason } from './reason';
import { RiskScores } from './risk-scores';
/**
 * Risk score response
 * @export
 * @interface RiskReport
 */
export interface RiskReport {
    /**
     * 
     * @type {Array<Reason>}
     * @memberof RiskReport
     */
    reasons: Array<Reason>;
    /**
     * 
     * @type {RiskScores}
     * @memberof RiskReport
     */
    riskScores: RiskScores;
}
