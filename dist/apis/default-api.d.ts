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
import { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { RiskReport } from '../models';
/**
 * DefaultApi - axios parameter creator
 * @export
 */
export declare const DefaultApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @param {string} address
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    scoreBtcAddressGet: (address: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @param {string} address
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    scoreEthAddressGet: (address: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * DefaultApi - functional programming interface
 * @export
 */
export declare const DefaultApiFp: (configuration?: Configuration) => {
    /**
     *
     * @param {string} address
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    scoreBtcAddressGet(address: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<RiskReport>>>;
    /**
     *
     * @param {string} address
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    scoreEthAddressGet(address: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<RiskReport>>>;
};
/**
 * DefaultApi - factory interface
 * @export
 */
export declare const DefaultApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @param {string} address
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    scoreBtcAddressGet(address: string, options?: AxiosRequestConfig): Promise<AxiosResponse<RiskReport>>;
    /**
     *
     * @param {string} address
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    scoreEthAddressGet(address: string, options?: AxiosRequestConfig): Promise<AxiosResponse<RiskReport>>;
};
/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export declare class DefaultApi extends BaseAPI {
    /**
     *
     * @param {string} address
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    scoreBtcAddressGet(address: string, options?: AxiosRequestConfig): Promise<AxiosResponse<RiskReport>>;
    /**
     *
     * @param {string} address
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    scoreEthAddressGet(address: string, options?: AxiosRequestConfig): Promise<AxiosResponse<RiskReport>>;
}
