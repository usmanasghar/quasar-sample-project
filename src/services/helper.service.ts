import { AxiosResponse } from 'axios';
import { cloneDeep } from 'lodash-es';
import { QuasarIconSet } from 'quasar';
import { Name, parseFullName } from 'parse-full-name';

export default class HelperService {
  /**
   * Overrides the default Quasar icon set and returns a custom one
   *
   * @param {QuasarIconSet} quasarIcons - Quasar Icon Set
   * @returns {QuasarIconSet} Quasar Icon Set
   */
  public static overrideQuasarIcons(quasarIcons: QuasarIconSet): QuasarIconSet {
    const cloneQuasarIcons: QuasarIconSet = cloneDeep(quasarIcons);

    cloneQuasarIcons.arrow.dropdown =
      'M10.82,14.946l3.5-3.5a.659.659,0,0,1,.935,0,.667.667,0,0,1,0,.938l-3.968,3.971a.661.661,0,0,1-.913.019l-4-3.987a.662.662,0,0,1,.935-.938Z';

    const sortIconHref: string = new URL('../assets/img/sort-icon.svg', import.meta.url).href;
    cloneQuasarIcons.table.arrowUp = `img:${sortIconHref}`;

    return cloneQuasarIcons;
  }

  public static async unwrapAxiosResponse<T>(request: Promise<AxiosResponse<T>>): Promise<T> {
    const response: AxiosResponse<T> = await request;

    return response.data;
  }

  public static capitalizeFirstLetter(string: string): string {
    if (!string) {
      return '';
    }

    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  public static async toBlob(dataURI: string): Promise<Blob> {
    const data: Response = await fetch(dataURI);
    return data.blob();
  }

  public static parseFullName(fullName: string): Name {
    return parseFullName(fullName);
  }

  public static containsIgnoredRowElements(event: Event): boolean {
    if (!(event.target instanceof HTMLElement)) {
      return false;
    }

    const isClickedOnCheckbox: boolean = event.target.classList.contains(
      'ui_kit-shipvagoo_checkbox--box',
    );

    const isClickedOnButton: boolean =
      event.target.classList.contains('ui_kit-shipvagoo_button') ||
      event.target.classList.contains('q-btn__content');

    const isClickedOnIcon: boolean = event.target.classList.contains('q-icon');

    return isClickedOnCheckbox || isClickedOnButton || isClickedOnIcon;
  }

  public static addStar(label?: string): string | undefined {
    if (!label) {
      return undefined;
    }

    return `${label}*`;
  }

  public static switchToDarkColorScheme(): void {
    document.body.style.backgroundColor = '#000000';
    document.body.style.color = '#ffffff';
  }

  public static switchToLightColorScheme(): void {
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#000000';
  }

  public static formatId(id: number | string): string {
    return id.toString().padStart(13, '0');
  }
}
