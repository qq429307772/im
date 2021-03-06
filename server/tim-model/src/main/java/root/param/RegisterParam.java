package root.param;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;

import lombok.Getter;
import lombok.Setter;

/**
 * 注册请求录入参数
 * @author tuwq
 *
 */
@Setter
@Getter
public class RegisterParam {
	
	@NotBlank(message="手机号不允许为空串")
	@NotNull(message="手机号不允许为空")
	private String telephone;
	@NotBlank(message="昵称不允许为空串")
	@NotNull(message="昵称不允许为空")
	@Length(min = 1, max = 7, message = "昵称保持在1-7之间")
	private String nickname;
	@NotBlank(message="密码不允许为空串")
	@NotNull(message="密码不允许位空")
	private String password;
	@NotBlank(message="密码不允许为空串")
	@NotNull(message="密码不允许位空")
	private String rePassword;
	@NotBlank(message="验证码不允许为空串")
	@NotNull(message="验证码不允许位空")
	private String validateCode;
	@NotBlank(message="手机标识码不允许为空串")
	@NotNull(message="手机标识码不允许位空")
	private String appId;
}
