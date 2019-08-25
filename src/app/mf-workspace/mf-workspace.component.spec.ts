import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MfWorkspaceComponent } from './mf-workspace.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MfWorkspaceComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MfWorkspaceComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'app2'`, () => {
    const fixture = TestBed.createComponent(MfWorkspaceComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app2');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(MfWorkspaceComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app2!');
  });
});
